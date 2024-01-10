import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/card/Card";
import env from "@/utils/env";
import type { Post } from "@prisma/client";

const getData = async (page: number, category: string) => {
  const res = await fetch(
    `${env.NEXTAUTH_URL}/api/posts?page=${page}&category=${category}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts!");
  }

  return res.json();
};

const CardList = async ({
  page,
  category = "",
}: {
  page: number;
  category?: string;
}) => {
  const { posts, count }: { posts: Post[]; count: number } = await getData(
    page,
    category
  );
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
