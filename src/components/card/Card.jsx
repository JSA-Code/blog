import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/comp.jpg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{post.createdAt}</span>
          <span className={styles.category}>{post.category}</span>
        </div>
        <Link href="/">
          <h1 className="">{post.title}</h1>
        </Link>
        <p className={styles.desc}>{post.description}</p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
