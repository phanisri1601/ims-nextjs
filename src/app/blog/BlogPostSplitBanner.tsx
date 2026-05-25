"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./BlogPost.module.css";

type Props = {
  src: string;
  alt: string;
};

export default function BlogPostSplitBanner({ src, alt }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const leftTrackRef = useRef<HTMLDivElement>(null);
  const rightTrackRef = useRef<HTMLDivElement>(null);
  const [stageWidth, setStageWidth] = useState(0);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const update = () => {
      setStageWidth(stage.offsetWidth);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const leftEl = leftTrackRef.current;
    const rightEl = rightTrackRef.current;
    const stageEl = stageRef.current;
    if (!leftEl || !rightEl || !stageEl || stageWidth === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.killTweensOf([leftEl, rightEl, stageEl]);

    if (prefersReducedMotion) {
      gsap.set([leftEl, rightEl], { yPercent: 0 });
      gsap.set(stageEl, { scale: 1 });
      return;
    }

    gsap.set(leftEl, { yPercent: -100, scale: 1 });
    gsap.set(rightEl, { yPercent: 100, scale: 1 });
    gsap.set(stageEl, { scale: 1, transformOrigin: "center center" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(leftEl, { yPercent: 0, duration: 1.4 }, 0.1)
      .to(rightEl, { yPercent: 0, duration: 1.4 }, 0.1)
      .to(
        stageEl,
        {
          scale: 1.08,
          duration: 0.9,
          ease: "power2.out",
        },
        "+=0.08"
      );

    return () => {
      tl.kill();
      gsap.set(stageEl, { scale: 1 });
    };
  }, [src, stageWidth]);

  const trackWidth = stageWidth > 0 ? stageWidth : undefined;
  const rightOffset = trackWidth ? -(trackWidth / 2) : undefined;

  return (
    <section className={styles.splitBanner} aria-label="Article cover">
      <div className={styles.splitBannerFrame}>
        <div ref={stageRef} className={styles.splitBannerStage}>
          <div className={`${styles.splitPanel} ${styles.splitPanelLeft}`}>
            <div
              ref={leftTrackRef}
              className={styles.splitImageTrack}
              style={trackWidth ? { width: trackWidth } : undefined}
            >
              <div className={styles.splitImageUnified}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority
                  sizes="(max-width: 1320px) 100vw, 1320px"
                  className={styles.splitImage}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.splitPanel} ${styles.splitPanelRight}`}>
            <div
              ref={rightTrackRef}
              className={styles.splitImageTrack}
              style={
                trackWidth
                  ? { width: trackWidth, left: rightOffset }
                  : undefined
              }
            >
              <div className={styles.splitImageUnified}>
                <Image
                  src={src}
                  alt=""
                  aria-hidden
                  fill
                  priority
                  sizes="(max-width: 1320px) 100vw, 1320px"
                  className={styles.splitImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
