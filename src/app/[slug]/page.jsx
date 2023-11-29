import Image from "next/image";
import styles from "./single.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const Single = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/comp.jpg" alt="" fill className={styles.profile} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.06.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/comp.jpg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur sit amet ipsum in placerat. Aenean non massa
              condimentum, luctus velit in, ultricies massa. Sed leo nisl,
              efficitur sed purus eu, pretium auctor nibh. Quisque congue massa
              purus.
            </p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur sit amet ipsum in placerat. Aenean non massa
              condimentum, luctus velit in, ultricies massa. Sed leo nisl,
              efficitur sed purus eu, pretium auctor nibh. Quisque congue massa
              purus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consectetur sit amet ipsum in placerat. Aenean non massa
              condimentum, luctus velit in, ultricies massa. Sed leo nisl,
              efficitur sed purus eu, pretium auctor nibh. Quisque congue massa
              purus.
            </p>
          </div>
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Single;
