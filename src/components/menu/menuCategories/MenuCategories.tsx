import styles from "./menuCategories.module.css";
import Link from "next/link";

type Post = {
  type: string;
  url: string;
  img: string;
};

const MenuCategories = ({ posts }: { posts: Post[] }) => {
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
