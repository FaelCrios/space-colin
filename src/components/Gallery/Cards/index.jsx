import React from "react";
import favorito from "../favorito.png";
import open from "../open.png";

const Cards = ({photos, styles}) => {
  return (
    <ul className={styles.galeria__cards}>
      {photos.map((photos) => {
        return (
          <li key={photos.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={photos.imagem}
              alt={photos.titulo}
            />

            <p className={styles.galeria__descricao}>{photos.titulo}</p>
            <div>
              <p>{photos.creditos}</p>
              <span>
                <img src={favorito} alt="Like icon" />
                <img src={open} alt="modal icon" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;
