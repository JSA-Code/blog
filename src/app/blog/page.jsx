import styles from "./blog.module.css";
import CardList from "@/components/cardList/CardList";

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <CardList />
    </div>
  );
};

export default Blog;
