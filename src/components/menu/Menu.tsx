import styles from "./menu.module.css";
import MenuPosts from "./menuPosts/MenuPosts";
import MenuCategories from "./menuCategories/MenuCategories";

const posts = [
  { type: "style", url: "/blog?category=style", img: "/next.svg" },
  { type: "fashion", url: "/blog?category=fashion", img: "/next.svg" },
  { type: "food", url: "/blog?category=food", img: "/next.svg" },
  { type: "travel", url: "/blog?category=travel", img: "/next.svg" },
];

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's Hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <MenuPosts posts={posts} withImage={false} />

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>

      <MenuCategories posts={posts} />

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>

      <MenuPosts posts={posts} withImage={true} />
    </div>
  );
};

export default Menu;
