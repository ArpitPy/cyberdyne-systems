import React from "react";
import styles from "@/app/styles/cyberstrike.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Cyberstrike Mercs</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          Cyberstrike Mercs is a division of Cyberdyne Systems that provides
          high quality and pofessional mercenary services. We are a
          semi-automated merc service provider, we have collaborated with
          several major raiding alliances in the game that help us provide
          seamless service. Unlike game bounty system we help you instantly hit
          you target instead of putting bounty and waiting for someone to notice
          it.
        </div>
        <div className={styles.desc}>
          We have mercs in all war-ranges from low tier to highest tiers!
        </div>
        <div className={styles.subhead}>Rules</div>
        <div className={styles.desc}>
          To read our rules, terms and conditions in detail,{" "}
          <a
            className={styles.links}
            href="https://docs.google.com/document/d/1NR9YSj7khj_KCp9DAD8gY4IyIiLbUITYQgzVKYfDduY/edit?usp=sharing"
            target="_blank"
          >
            <b>Click here!</b>
          </a>
        </div>
        <div className={styles.bottom}>
          <a
            href="https://discord.gg/km87ewZAUG"
            target="_blank"
            className={styles.butt}
          >
            <button>Visit Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
