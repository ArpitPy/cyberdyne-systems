import React from "react";
import Services from "../components/services/Services";
import styles from "./about.module.css";

const Services_main = () => {
  return (
    <>
      <Services />
      <div className={styles.about_section}>
        <div className={styles.title}>About Us</div>
        <div className={styles.desc}>
          Cyberdyne Systems is a highly advanced corporation of Orbis, that
          leverages the power of innovation to provide unparalleled services to
          our customers. Our mission is to revolutionize the way businesses are
          done in Orbis, making it more accessible, efficient, trustworthy and
          secure.
        </div>
        <br />
        <div className={styles.desc}>
          Our team consists of experienced players and business owners, we are
          super active in-game and make sure that you get the most professional
          experience!
          <br />
          We are your one stop destination for all services ranging from bank
          loans, bulk resources trading, merc services or portal!
        </div>
        <br />
        <div className={styles.desc}>
          <center>
            <br />
            👑{" "}
            <u>
              <b>Directors</b>
            </u>{" "}
            👑
            <br />
            Lord Skeleton
            <br />
            Borg
            <br />
            Basebond
            <br />
            <br />⭐{" "}
            <u>
              <b>Co-Founders</b>
            </u>{" "}
            ⭐
            <br />
            Holy Phoenix Lizzie
            <br />
            Keynesian
            <br />
            Simone
          </center>
        </div>
      </div>
    </>
  );
};

export default Services_main;
