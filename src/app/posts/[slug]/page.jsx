import Image from "next/image";
import styles from "./single.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
};

const Single = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            {post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={post.user.image}
                  alt=""
                  fill
                  className={styles.profile}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}>
                {post.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {post?.image && (
          <div className={styles.imageContainer}>
            <Image src={post.image} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.description || "" }}
          />
          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Single;
