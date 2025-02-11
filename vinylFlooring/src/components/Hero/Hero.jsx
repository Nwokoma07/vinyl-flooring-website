import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>FloorCraft Interiors</h1>
        <p className={styles.description}>
        We strive to bring exceptional quality, creativity, and value to every space we touch. 
        By leveraging cutting-edge vinyl flooring technology and combining it with unique design perspectives, 
        we empower clients in Nigeria and Ghana to create beautiful, functional, and lasting interiors.
        </p>
        <a href="mailto:marteks2001@yahoo.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/vinylHero.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};