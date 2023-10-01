import React from "react";
import styles from "@/app/styles/issuen.module.css";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className={styles.title}>Issue 1</div>
      <div className={styles.content}>
        <div className={styles.cover}>
          <Image alt="cover" src="/cover.png" height={282} width={200} />
        </div>
        <div className={styles.data}>
          <b>Published on:</b> 17th September 2023
        </div>
        <div className={styles.download}>
          <a href="https://drive.google.com/file/d/1mh2z6X1GAFV1VWrxvfZ3ANXq0s_nqAjR/view" target="_blank">
            <button>📗 Read Online!</button>
          </a>
        </div>
        <div className={styles.download}>
          <a href="https://drive.google.com/uc?id=1mh2z6X1GAFV1VWrxvfZ3ANXq0s_nqAjR&export=download" target="_blank">
            <button>📁 Download Now!</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
