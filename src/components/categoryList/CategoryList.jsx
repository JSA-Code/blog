import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const category = [
  { type: "style", url: "/blog?category=style", img: "/comp.jpg" },
  { type: "fashion", url: "/blog?category=fashion", img: "/comp.jpg" },
  { type: "food", url: "/blog?category=food", img: "/comp.jpg" },
  { type: "travel", url: "/blog?category=travel", img: "/comp.jpg" },
  { type: "culture", url: "/blog?category=culture", img: "/comp.jpg" },
  { type: "coding", url: "/blog?category=coding", img: "/comp.jpg" },
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
