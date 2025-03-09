import React from "react";
import { useWindow } from "@ibrahimstudio/react";
import TabButton from "../inputs/tab-button";
import Image from "../contents/image";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  const { width } = useWindow();

  return (
    <header className={styles.navbar}>
      <nav className={styles.navbarContent}>
        <Image width="auto" height="var(--pixel-45)" alt="" src="/png/logo.png" />
        {width > 540 && (
          <section className={styles.navbarMenu}>
            <TabButton>Home</TabButton>
            <TabButton>About</TabButton>
            <TabButton>Membership</TabButton>
            <TabButton>Programs</TabButton>
            <TabButton>News</TabButton>
            <TabButton>Contact Us</TabButton>
          </section>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
