import React from "react";
import style from "./Service.module.css";
import image from "../../../src/images/animated/about.gif";

const Service = () => {
  return (
    <div className={style.service}>
      <h1>Service Section</h1>
      <h2>This page is under construction</h2>
      <img className={style.image} src={image} alt="avatar" />
    </div>
  );
};

export default Service;
