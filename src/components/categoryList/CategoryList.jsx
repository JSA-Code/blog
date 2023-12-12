import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

/* const category = [
  { title: "style", url: "/blog?category=style", img: "/comp.jpg" },
  { title: "fashion", url: "/blog?category=fashion", img: "/comp.jpg" },
  { title: "food", url: "/blog?category=food", img: "/comp.jpg" },
  { title: "travel", url: "/blog?category=travel", img: "/comp.jpg" },
  { title: "culture", url: "/blog?category=culture", img: "/comp.jpg" },
  { title: "coding", url: "/blog?category=coding", img: "/comp.jpg" },
]; */
const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categorized posts!");
  }

  return res.json();
};

const CategoryList = async () => {
  const categories = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map((item) => (
          <Link
            key={item.id}
            href={`/blog?category=${item.title}`}
            className={`${styles.category} ${styles[item.slug]}`}
          >
            {item.image && (
              <Image
                src={`${item.image}`}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
