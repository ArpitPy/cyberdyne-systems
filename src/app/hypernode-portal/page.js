import React from "react";
import styles from "@/app/styles/hypernode.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Hypernode Portal</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          Hypernode Portal is a collection of discord links of all major and
          micro alliances in Politics & War as well as collection of discord
          links of all the business and community servers in the game. It is a
          discord directory which you can use if you need to visit several
          alliance servers or business servers frequently. It save saves your
          visit to alliances pages in-game as well as hassles of asking aroud
          players for business links!
        </div>
        <div className={styles.desc}>
          Hypernode Portal is a well maintained and up-to-date with latest
          links, our management makes sure to update or add the links reguarly.
          <br />
          If you find a missing or broken link in the server, do let our staffs
          know in{" "}
          <a
            className={styles.links}
            href="https://discord.com/channels/1146694365960491069/1147775901933781073"
            target="_blank"
          >
            #📩-submit-new-server-link
          </a>{" "}
          channel.
          <br />
          We also allow FREE advertisements in{" "}
          <a
            className={styles.links}
            href="https://discord.com/channels/1146694365960491069/1147772063755546705"
            target="_blank"
          >
            #💼-advertisements
          </a>{" "}
          channel.
        </div>
        <div className={styles.subhead}>Rules</div>
        <div className={styles.desc}>
          - You must not spam your AD in the advertisements channel, post your
          AD only if it is not among 3 latest ADs posted in the channel!
          <br />
          <br />
          - We do not allow advertising bank that are know for committing frauds
          or scams, such banks will be instantly removed.
          <br /><br />- If your bank server was banned, please contact our bank
          manager: <b>Holy Phoenix Lizzie</b> for ban appeal or info.
          <br /><br />- In case of alliance servers, the word "The" in beginning of
          alliance name will be ignored, for example "The XYZ" will be posted in
          'X' category not 'T'.
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
