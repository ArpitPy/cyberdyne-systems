import React from "react";
import styles from "./magazine.module.css";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className={styles.title}>
        <div>Magazines</div>
      </div>
      <div className={styles.collection}>
        <Link style={{ textDecoration: "none" }} href="/issue1">
          <div className={styles.issue}>
            <Image src="/cover.png" height={282} width={200} />
            <div className={styles.issue_no}>Issue 1</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default page;
