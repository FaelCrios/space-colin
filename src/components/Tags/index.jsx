import React from "react";
import styles from "./Tags.module.scss"

const Tags = () => {
  return (
    <div className={styles.tags}>
      <p>Filter</p>
      <ul className={styles.tags__lista}>
        <li>Stars</li>
        <li>Galaxies</li>
        <li>Moon</li>
        <li>Planets</li>
      </ul>
    </div>
  );
};

export default Tags;
