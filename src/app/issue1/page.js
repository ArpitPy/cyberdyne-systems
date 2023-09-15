import React from "react";
import styles from "@/app/styles/issuen.module.css";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className={styles.title}>Issue 1</div>
      <div className={styles.content}>
        <div className={styles.cover}>
          <Image src="/cover.png" height={282} width={200} />
        </div>
        <div className={styles.data}>
          <b>Published on:</b> 20th September 2023
        </div>
        <div className={styles.download}>
          <a href="#" target="_blank">
            <button>📁 Download Now!</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
