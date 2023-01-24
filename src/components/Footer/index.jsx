import React from "react";
import logo from './logo.png'
import styles from "./Footer.module.scss";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section>
            <a href="/">
                <img src={logo}/>
            </a>
        </section>
      <nav className={styles.menu}>
        <section>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook logo" />
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href="https://www.twitter.com/">
                <img src={twitter} alt="twitter logo" />
              </a>
            </li>
            <li className={styles.menu__item}>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram logo" />
              </a>
            </li>
          </ul>
          </section>
      </nav>
    </footer>
  );
};
export default Footer;
