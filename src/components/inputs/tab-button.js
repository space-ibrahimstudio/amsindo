import React from "react";
import styles from "./styles/tab-button.module.css";

const TabButton = ({ children, onClick = () => {} }) => {
  return (
    <button className={styles.tabButton} onClick={onClick}>
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};

export default TabButton;
