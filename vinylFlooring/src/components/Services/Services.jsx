import React from "react";

import styles from "./Services.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>Services</h2>
      <div className={styles.content}>
        
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                
                <div className={styles.historyItemDetails}>
                  <h3>{historyItem.role}</h3>
                  <p>{historyItem.startDate}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};