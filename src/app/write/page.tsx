// "use client";

// import styles from "./write.module.css";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import "react-quill/dist/quill.bubble.css";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import { firebaseApp } from "@/utils/firebase";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import {
//   HiPlus,
//   HiOutlineUpload,
//   HiVideoCamera,
//   HiPhotograph,
// } from "react-icons/hi";

// const storage = getStorage(firebaseApp);
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// // const ReactQuill =
// //   typeof window === "object" ? require("react-quill") : () => false;

// const Write = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [categorySlug, setCategorySlug] = useState("");
//   const [file, setFile] = useState(null);
//   const [media, setMedia] = useState("");
//   const [open, setOpen] = useState(false);
//   const { status } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     const upload = () => {
//       if (!file) {
//       const name = new Date().getTime() + file.name;
//       const storageRef = ref(storage, name);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       // Register three observers:
//       // 1. 'state_changed' observer, called any time the state changes
//       // 2. Error observer, called on failure
//       // 3. Completion observer, called on successful completion
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           // Observe state change events such as progress, pause, and resume
//           // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//           // const progress =
//           //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           // console.log("Upload is " + progress + "% done");
//           // switch (snapshot.state) {
//           //   case "paused":
//           //     console.log("Upload is paused");
//           //     break;
//           //   case "running":
//           //     console.log("Upload is running");
//           //     break;
//           // }
//         },
//         (error) => {
//           // Handle unsuccessful uploads
//         },
//         () => {
//           // Handle successful uploads on complete
//           // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setMedia(downloadURL);
//           });
//         }
//       );
//     };

//     file && upload();
//   }, [file]);

//   if (status === "loading") {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (status === "unauthenticated") {
//     return router.push("/login");
//   }

//   const slugify = (str: string) =>
//     str
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");

//   const handleSubmit = async () => {
//     const res = await fetch("/api/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title,
//         description: description,
//         image: media,
//         slug: slugify(title),
//         categorySlug: categorySlug || "style", //If not selected, choose the general category
//       }),
//     });

//     if (res.status === 200) {
//       const data = await res.json();
//       router.push(`/posts/${data.slug}`);
//     } else if (!res.ok) {
//       throw new Error("Failed to create post!");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <input
//         type="text"
//         placeholder="Title"
//         className={styles.input}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <select
//         className={styles.select}
//         onChange={(e) => setCategorySlug(e.target.value)}
//       >
//         <option value="style">style</option>
//         <option value="fashion">fashion</option>
//         <option value="food">food</option>
//         <option value="culture">culture</option>
//         <option value="travel">travel</option>
//         <option value="coding">coding</option>
//       </select>
//       <div className={styles.editor}>
//         <button className={styles.button} onClick={() => setOpen(!open)}>
//           <HiPlus />
//         </button>
//         {open && (
//           <div className={styles.add}>
//             <input
//               type="file"
//               id="image"
//               onChange={(e) => setFile(e.target.files[0])}
//               style={{ display: "none" }}
//             />
//             <button className={styles.addButton}>
//               <label htmlFor="image" className={styles.upload}>
//                 <HiPhotograph />
//               </label>
//             </button>
//             <button className={styles.addButton}>
//               <HiOutlineUpload />
//             </button>
//             <button className={styles.addButton}>
//               <HiVideoCamera />
//             </button>
//           </div>
//         )}
//         <ReactQuill
//           theme="bubble"
//           value={description}
//           onChange={setDescription}
//           placeholder="Tell your story..."
//           className={styles.textArea}
//         />
//       </div>
//       <button className={styles.publish} onClick={handleSubmit}>
//         Publish
//       </button>
//     </div>
//   );
// };

// export default Write;
