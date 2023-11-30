"use client";

import styles from "./write.module.css";
import {
  HiPlus,
  HiOutlineUpload,
  HiVideoCamera,
  HiPhotograph,
} from "react-icons/hi";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <HiPlus />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <HiPhotograph />
            </button>
            <button className={styles.addButton}>
              <HiOutlineUpload />
            </button>
            <button className={styles.addButton}>
              <HiVideoCamera />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className={styles.textArea}
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Write;
