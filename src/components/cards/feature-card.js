import React from "react";
import Image from "../contents/image";
import styles from "./styles/feature-card.module.css";

const FeatureCard = ({ title, desc, icon }) => {
  return (
    <section className={styles.featureCard}>
      <div className={styles.cardIcon}>
        <Image width="auto" height="var(--pixel-25)" alt={title} src={icon} />
      </div>
      <h1 className={styles.cardTitle}>{title}</h1>
      <p className={styles.cardDesc}>{desc}</p>
    </section>
  );
};

export default FeatureCard;
