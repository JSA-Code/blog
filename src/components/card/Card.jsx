import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ post }) => {
  return (
    <div className={styles.container}>
      {post.image && (
        <div className={styles.imageContainer}>
          <Image src={post.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)}
            {" - "}
          </span>
          <span className={styles.category}>{post.categorySlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1 className={styles.title}>{post.title}</h1>
        </Link>
        <p className={styles.description}>
          {post.description.substring(0, 60)}
        </p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
