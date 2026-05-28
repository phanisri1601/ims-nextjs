"use client";

import Link from "next/link";
import { useRef } from "react";
import styles from "./ServicesVolumeGrid.module.css";

export const DEFAULT_SERVICE_VIDEO_SRC = "/12642073_1920_1080_24fps.mp4";

export type ServiceGridItem = {
  title: string;
  slug: string;
  image: string;
  video?: string;
  description?: string;
  href?: string;
};

type Props = {
  services: ServiceGridItem[];
  basePath?: string;
};

function serviceDescription(title: string, custom?: string) {
  if (custom?.trim()) return custom;
  return `End-to-end ${title.toLowerCase()} for brands that want clear strategy, sharp creative, and measurable growth across Bangalore and beyond.`;
}

function ServiceGridVideo({
  title,
  poster,
  src,
}: {
  title: string;
  poster: string;
  src: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {});
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className={styles.mediaWrap}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
      />
      <span className={styles.moreBtn}>More +</span>
    </div>
  );
}

export default function ServicesVolumeGrid({ services, basePath = "/services" }: Props) {
  return (
    <div className={styles.grid}>
      {services.map((service) => {
        const href = service.href ?? `${basePath}/${service.slug}`;
        const videoSrc = service.video ?? DEFAULT_SERVICE_VIDEO_SRC;

        return (
          <Link
            key={service.slug}
            href={href}
            className={styles.card}
            title={service.title}
          >
            <ServiceGridVideo
              title={service.title}
              poster={service.image}
              src={videoSrc}
            />
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>
              {serviceDescription(service.title, service.description)}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
