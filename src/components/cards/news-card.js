import React from "react";
import Image from "../contents/image";
import styles from "./styles/news-card.module.css";

const NewsCard = ({ image, category, title, desc, date }) => {
  return (
    <section className={styles.newsCard}>
      <Image className={styles.cardImageIcon} alt={title} src={image} />
      <section className={styles.cardContent}>
        <b className={styles.cardCat}>{category}</b>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDesc}>{desc}</p>
        <span className={styles.cardDate}>{date}</span>
      </section>
    </section>
  );
};

export default NewsCard;
