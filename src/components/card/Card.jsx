import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/next.svg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.6.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur sit amet ipsum in placerat. Aenean non massa condimentum,
          luctus velit in, ultricies massa. Sed leo nisl, efficitur sed purus
          eu, pretium auctor nibh. Quisque congue massa purus. Pellentesque
          convallis dui et est vulputate convallis. Aenean eleifend nunc a
          tincidunt pharetra.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
