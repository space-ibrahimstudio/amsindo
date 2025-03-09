import React from "react";
import styles from "./styles/count-card.module.css";

const CountCard = ({ title, desc }) => {
  return (
    <section className={styles.countCard}>
      <h1 className={styles.cardTitle}>{title}</h1>
      <span className={styles.cardDesc}>{desc}</span>
    </section>
  );
};

export default CountCard;
