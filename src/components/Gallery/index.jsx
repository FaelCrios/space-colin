import React from "react";
import Tags from "../Tags";
import styles from "./Gallery.module.scss";
import photos from './photos.json'
import Cards from "./Cards";

const Gallery = () => {
  return (
    <section className={styles.galeria}>
      <h2>Explore our gallery</h2>
      <Tags></Tags>
      <Cards photos={photos} styles={styles}/>
    </section>
  );
};

export default Gallery;
