import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/card/Card";

const getData = async (page, category = "") => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts?page=${page}&category=${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts!");
  }

  return res.json();
};

const CardList = async ({ page, category }) => {
  const { posts, count } = await getData(page, category);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card key={item.id} post={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
