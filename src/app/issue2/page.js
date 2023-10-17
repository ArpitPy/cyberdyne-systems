import React from "react";
import styles from "@/app/styles/issuen.module.css";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className={styles.title}>Issue 1</div>
      <div className={styles.content}>
        <div className={styles.cover}>
          <Image alt="cover" src="/cover2.png" height={282} width={200} />
        </div>
        <div className={styles.data}>
          <b>Published on:</b> 17th October 2023
        </div>
        <div className={styles.download}>
          <a href="https://drive.google.com/file/d/1pmEr2R4NiGn7oIfaFNBoWzV4lA5CUOh5/view?usp=sharing" target="_blank">
            <button>📗 Read Online!</button>
          </a>
        </div>
        <div className={styles.download}>
          <a href="https://drive.google.com/uc?id=1pmEr2R4NiGn7oIfaFNBoWzV4lA5CUOh5&export=download" target="_blank">
            <button>📁 Download Now!</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
