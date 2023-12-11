import styles from "./blog.module.css";
import CardList from "@/components/cardList/CardList";

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category} Blog</h1>
      <CardList page={page} category={category} />
    </div>
  );
};

export default Blog;
