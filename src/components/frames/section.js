import React from "react";
import { useWindow } from "@ibrahimstudio/react";
import styles from "./styles/section.module.css";

export const SectionHead = ({ title, desc }) => {
  return (
    <header className={styles.sectionHead}>
      <h1 className={styles.sectionTitle}>{title}</h1>
      <p className={styles.sectionDesc}>{desc}</p>
    </header>
  );
};

const Section = ({ children }) => {
  const { width } = useWindow();
  const sectioncss = { alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", justifyContent: "flex-start", padding: width > 1120 ? "var(--pixel-30) var(--pixel-120)" : width > 700 ? "var(--pixel-30) var(--pixel-60)" : "var(--pixel-30)", gap: "var(--pixel-30)" };
  return <section style={sectioncss}>{children}</section>;
};

export default Section;
