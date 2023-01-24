import React from "react";
import homeLogo from "../../assets/icones/home-ativo.png";
import maisCurtidas from "../../assets/icones/mais-curtidas-inativo.png";
import maisVisitas from "../../assets/icones/mais-vistas-inativo.png";
import novas from "../../assets/icones/novas-inativo.png";
import surpreendaMe from "../../assets/icones/surpreenda-me-inativo.png";
import styles from "./Menu.module.scss"

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={homeLogo} alt="Home logo"/>
          <a href="/">Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVisitas} alt="More visited in the site"/>
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="More likes"/>
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="New images"/>
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="surprise me"/>
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
