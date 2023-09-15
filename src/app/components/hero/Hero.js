import React from "react";
import styles from "@/app/styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          Cyberdyne Systems is a new age corporation of Orbis that aims to use
          technology for providing the best services to its customers!
        </div>
        <div className={styles.hero_button}>
          <a href="https://discord.gg/nCwyHAsTWq" target="_blank">
            <button>Join Server</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
