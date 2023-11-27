import styles from "./menuCategories.module.css";
import Link from "next/link";

const MenuCategories = ({ posts }) => {
  return (
    <div className={styles.categoryList}>
      {posts.map((item) => (
        <Link
          href={item.url}
          key={item.type}
          className={`${styles.categoryItem} ${styles[item.type]}`}
        >
          {item.type}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
