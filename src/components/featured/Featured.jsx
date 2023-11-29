import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, welcome!</b> Check out the posts below.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/comp.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur sit amet ipsum in placerat. Aenean non massa
            condimentum, luctus velit in, ultricies massa. Sed leo nisl,
            efficitur sed purus eu, pretium auctor nibh. Quisque congue massa
            purus. Pellentesque convallis dui et est vulputate convallis. Aenean
            eleifend nunc a tincidunt pharetra. Pellentesque at lacinia risus.
            Morbi vel velit varius, iaculis urna at, molestie elit. Donec ac
            velit imperdiet tellus lobortis rhoncus. In hac habitasse platea
            dictumst.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
