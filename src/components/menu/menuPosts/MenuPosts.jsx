import Link from "next/link";
import styles from "./menuPosts.module.css";
import Image from "next/image";

const MenuPosts = ({ posts, withImage }) => {
  return (
    <div className={styles.items}>
      {posts.map((item) => (
        <Link href={item.url} key={item.type} className={styles.item}>
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src="/next.svg" alt="" fill className={styles.image} />
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
