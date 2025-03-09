import React, { useMemo } from "react";
import Image from "../contents/image";
import styles from "./styles/footer.module.css";

const MenuItem = ({ children }) => {
  const itemcss = { position: "relative", lineHeight: "140%", fontWeight: "500", fontFamily: "Inter", color: "rgba(13, 13, 20, 0.7)", textAlign: "left" };
  return <span style={itemcss}>{children}</span>;
};

const ContactItem = ({ alignSelf, gap, flex, image, label = "", children }) => {
  const sectioncss = useMemo(() => {
    return { alignSelf, gap };
  }, [alignSelf, gap]);

  const labelcss = useMemo(() => {
    return { flex };
  }, [flex]);

  return (
    <section className={styles.contactItem} style={sectioncss}>
      <Image width="var(--pixel-25)" height="var(--pixel-25)" alt={label} src={image} />
      <span className={styles.itemLabel} style={labelcss}>
        {children}
      </span>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContent}>
        <header className={styles.footerHead}>
          <Image width="auto" height="var(--pixel-45)" alt="" src="/png/logo.png" />
          <section className={styles.footerContact}>
            <ContactItem image="/svg/phone.svg">+62 881 0223 84778</ContactItem>
            <ContactItem image="/svg/office.svg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui.</ContactItem>
            <ContactItem image="/svg/email.svg">contact@amsindo.com</ContactItem>
          </section>
        </header>
        <section className={styles.footerMenu}>
          <h1 className={styles.menuTitle}>About Us</h1>
          <MenuItem>Our Vision</MenuItem>
          <MenuItem>Our Missions</MenuItem>
          <MenuItem>History</MenuItem>
          <MenuItem>Membership</MenuItem>
          <MenuItem>Programs</MenuItem>
          <MenuItem>News</MenuItem>
        </section>
        <section className={styles.footerMenu}>
          <h1 className={styles.menuTitle}>About Us</h1>
          <MenuItem>Our Vision</MenuItem>
          <MenuItem>Our Missions</MenuItem>
          <MenuItem>History</MenuItem>
          <MenuItem>Membership</MenuItem>
          <MenuItem>Programs</MenuItem>
          <MenuItem>News</MenuItem>
        </section>
        <section className={styles.footerSocials}>
          {/* <h1 className={styles.socialsTitle}>Socials</h1> */}
          <h1 className={styles.menuTitle}>Socials</h1>
          <ContactItem alignSelf="unset" gap="var(--pixel-10)" flex="unset" image="/svg/instagram.svg">
            @amsindo
          </ContactItem>
          <ContactItem alignSelf="unset" gap="var(--pixel-10)" flex="unset" image="/svg/whatsapp.svg">
            +62 881 0223 84778
          </ContactItem>
          <ContactItem alignSelf="unset" gap="var(--pixel-10)" flex="unset" image="/svg/facebook.svg">
            Amsindo
          </ContactItem>
          <ContactItem alignSelf="unset" gap="var(--pixel-10)" flex="unset" image="/svg/tiktok.svg">
            @amsindo.com
          </ContactItem>
        </section>
      </section>
      <span className={styles.footerCopyright}>© 2024 Amsindo. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
