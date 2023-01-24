import React, { Fragment } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Styles from "./inicialPage.module.scss";

const InicialPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={Styles.principal}>
          <Menu />
          <div className={Styles.principal__imagem}>
            <h1 className={Styles}>
              The most complete website site about the galaxy and other celetial
              bodies
            </h1>
            <Banner alt={"Banner - Earth seen from space"} />
          </div>
        </section>
      </main>
    <div>
      <Gallery/>
    </div>
      <Footer />
    </>
  );
};

export default InicialPage;
