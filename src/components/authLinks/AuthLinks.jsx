"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const navigation = [
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
  { name: "About", url: "/about" },
];

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "auth";
  return (
    <>
      {/* Large Screen View */}
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      {/* Mobile View */}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <HiMenu />
      </div>
      {open && (
        <div className={styles.menu}>
          {navigation.map((item) => (
            <Link key={item.name} href={item.url}>
              {item.name}
            </Link>
          ))}
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
