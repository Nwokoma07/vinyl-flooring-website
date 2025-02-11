import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Our Vision</h3>
              <p>
                To be the leading provider of innovative and sustainable vinyl flooring solutions in West Africa, 
                transforming homes and commercial spaces with elegance, durability, and craftsmanship.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Brand Story</h3>
              <p>
              FloorCraft Interiors was founded with a vision to revolutionize interior design in West Africa, starting from the ground up—literally. 
              Recognizing the need for high-quality yet affordable flooring solutions, our founders set out to specialize in vinyl flooring, 
              a versatile and durable option for both residential and commercial spaces.
              With a commitment to superior craftsmanship, we collaborate with some of the world’s leading vinyl flooring manufacturers to bring modern styles, 
              diverse textures, and eco-friendly options to our clients. Whether it’s a chic urban apartment in Lagos, a serene office in Accra, or a bustling restaurant in Abuja, FloorCraft Interiors ensures each space is a perfect blend of practicality and beauty.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};