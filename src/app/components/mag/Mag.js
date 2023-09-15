import React from "react";
import styles from "@/app/styles/mag.module.css";
import Image from "next/image";
import Link from "next/link";

const Mag = () => {
  return (
    <div className={styles.mag_main}>
      <div className={styles.cover}>
        <Image src="/cover.png" height={282} width={200} />
      </div>
      <div className={styles.desc}> 
        <div className={styles.title}>Read our E-Magazine <b>CYBERTIMES</b>!</div>
        <div className={styles.descp}>
          Check out our high-quality fun free e-magazines bringing to you, all
          the news and updates of Orbis with fun and games!
        </div>
        <Link style={{ textDecoration: 'none' }} href="/magazines"><button className={styles.butt}>Read ➡️</button></Link>
      </div>
    </div>
  );
};

export default Mag;
