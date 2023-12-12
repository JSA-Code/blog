"use client";

import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch comments!");
  }

  return await res.json();
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const {
    data: comments,
    mutate,
    isLoading,
  } = useSWR(`/api/comments?postSlug=${postSlug}`, fetcher);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ description, postSlug }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit comment!");
    }

    setDescription("");
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            value={description}
            className={styles.input}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to comment.</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading..."
          : comments?.map((comment) => (
              <div key={comment.id} className={styles.comment}>
                <div className={styles.user}>
                  {comment?.user?.image && (
                    <Image
                      src={comment.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.user.name}</span>
                    <span className={styles.date}>
                      {comment.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{comment.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
