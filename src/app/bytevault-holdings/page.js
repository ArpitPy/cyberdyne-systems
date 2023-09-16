import React from "react";
import styles from "@/app/styles/bytevault.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Bytevault Holdings</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          Bytevault Holdings is a division of Cyberdyne Systems that provides
          bank loans as well as bulk resources trading services. We provide
          alliance loans, nation loans, etc at low rate of interest.
        </div>
        <div className={styles.desc}>
          We have high standards and criterias for giving out loans and we loan
          out money only if you satisfy those. We provide the best and most
          professional banking service in Orbis. Bytevault Holdings a member of
          OSEC that helps us in loan recovery in case of a defaults.
        </div>
        <div className={styles.subhead}>Rules</div>
        <div className={styles.desc}>
          If you wish to read the rules, terms and condition of our bank,{" "}
          <a
            className={styles.links}
            target="_blank"
            href="https://docs.google.com/document/d/1vxYdk1y0hvM8nA-pDJs-aT4iCkTSMcx0PkDv7D9ZLjs/edit"
          >
            <b>click here</b>
          </a>{" "}
          to read our Charter.
        </div>
        <div className={styles.bottom}>
          <a
            href="https://discord.gg/anYFxMM2wT"
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
