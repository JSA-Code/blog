import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
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
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
  { name: "About", url: "/about" },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        {social.map((item) => (
          <Link key={item.name} href={item.url}>
            {item.icon}
          </Link>
        ))}
      </div>
      <div className={styles.logo}>
        <Link href="/">Example Blog</Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        {navigation.map((item) => (
          <Link key={item.name} href={item.url} className={styles.link}>
            {item.name}
          </Link>
        ))}
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
