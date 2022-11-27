import React from "react";
import style from "./Notice.module.css";
import image from "../../../src/images/animated/notice.gif";

const Notice = () => {
  return (
    <div className={style.Notice}>
      <h1>Contact Section</h1>
      <h2>This page is under construction</h2>
      <img className={style.image} src={image} alt="avatar" />
    </div>
  );
};

export default Notice;
