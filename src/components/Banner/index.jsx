import React, { Fragment } from "react";
import bannerLogo from "./banner.png";

const Banner = (props) => {
  return <img src={bannerLogo} alt={props.alt} />;
};

export default Banner;
