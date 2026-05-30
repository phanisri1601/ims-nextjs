import Link from "next/link";
import type { BlogCategorySlug } from "../../data/blogCategories";
import { buildBlogListHref } from "../../data/blogCategories";
import styles from "./BlogPage.module.css";

type CategoryOption = {
  slug: BlogCategorySlug;
  label: string;
  count: number;
};

type Props = {
  categories: CategoryOption[];
  activeCategory: BlogCategorySlug;
};

export default function BlogCategoryFilter({ categories, activeCategory }: Props) {
  return (
    <div className={styles.categoryFilter} role="navigation" aria-label="Filter blog posts by category">
      <p className={styles.categoryFilterLabel}>Browse by category</p>
      <div className={styles.categoryFilterList}>
        {categories.map((category) => {
          const isActive = category.slug === activeCategory;
          return (
            <Link
              key={category.slug}
              href={buildBlogListHref(1, category.slug)}
              className={`${styles.categoryFilterChip} ${isActive ? styles.categoryFilterChipActive : ""}`}
              aria-current={isActive ? "true" : undefined}
            >
              {category.label}
              <span className={styles.categoryFilterCount}>{category.count}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
