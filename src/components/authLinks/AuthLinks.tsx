"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { useSession, signOut } from "next-auth/react";

const navigation = [
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
  { name: "About", url: "/about" },
];

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <>
      {/* Large Screen View */}
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={() => signOut()}>
            Logout
          </span>
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
          {status === "unauthenticated" ? (
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
