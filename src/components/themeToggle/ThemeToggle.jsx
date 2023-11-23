"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#858585" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <FaMoon size={16} style={{ color: "#f2ca3a" }} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <FaSun size={theme === "dark" ? 16 : 8} style={{ color: "#ffd500" }} />
    </div>
  );
};

export default ThemeToggle;
