import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const category = [
  { type: "style", url: "/blog?category=style", img: "/next.svg" },
  { type: "fashion", url: "/blog?category=fashion", img: "/next.svg" },
  { type: "food", url: "/blog?category=food", img: "/next.svg" },
  { type: "travel", url: "/blog?category=travel", img: "/next.svg" },
  { type: "culture", url: "/blog?category=culture", img: "/next.svg" },
  { type: "coding", url: "/blog?category=coding", img: "/next.svg" },
];

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {category.map((item) => (
          <Link
            key={item.type}
            href={`/blog?category=${item.type}`}
            className={`${styles.category} ${styles[item.type]}`}
          >
            <Image
              src={`${item.img}`}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
            {item.type}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
