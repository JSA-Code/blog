import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const social = [
  { name: "facebook", url: "https://www.facebook.com", icon: <FaFacebook /> },
  {
    name: "instagram",
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  { name: "tiktok", url: "https://www.tiktok.com", icon: <FaTiktok /> },
  { name: "youtube", url: "https://www.youtube.com", icon: <FaYoutube /> },
];

const navigation = [
  { name: "home", url: "/" },
  { name: "blog", url: "/blog" },
  { name: "contact", url: "/contact" },
  { name: "about", url: "/about" },
];

const category = [
  { type: "style", url: "/blog?category=style", img: "/comp.jpg" },
  { type: "fashion", url: "/blog?category=fashion", img: "/comp.jpg" },
  { type: "food", url: "/blog?category=food", img: "/comp.jpg" },
  { type: "travel", url: "/blog?category=travel", img: "/comp.jpg" },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/comp.jpg" alt="Example Blog" width={50} height={50} />
          <h1 className={styles.logoText}>Example Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur sit amet ipsum in placerat. Aenean non massa condimentum,
          luctus velit in, ultricies massa. Sed leo nisl, efficitur sed purus
          eu, pretium auctor nibh. Quisque congue massa purus.
        </p>
        <div className={styles.social}>
          {social.map((item) => (
            <Link key={item.name} href={item.url}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          {navigation.map((item) => (
            <Link key={item.name} href={item.url} className={styles.link}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          {category.map((item) => (
            <Link key={item.type} href={item.url} className={styles.link}>
              {item.type}
            </Link>
          ))}
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          {social.map((item) => (
            <Link key={item.name} href={item.url} className={styles.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
