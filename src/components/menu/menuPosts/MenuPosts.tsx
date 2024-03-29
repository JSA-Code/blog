import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

type Post = {
  type: string;
  url: string;
  img: string;
};

const MenuPosts = ({
  posts,
  withImage,
}: {
  posts: Post[];
  withImage: boolean;
}) => {
  return (
    <div className={styles.items}>
      {posts.map((item) => (
        <Link href={item.url} key={item.type} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/comp.jpg" alt="" fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.type]}`}>
              {item.type}
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.06.2023</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
