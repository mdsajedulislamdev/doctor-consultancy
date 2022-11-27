import React from "react";
import style from "./Contact.module.css";
import image from "../../../src/images/animated/about.gif";

const Contact = () => {
  return (
    <div className={style.contact}>
      <h1>Contact Section</h1>
      <h2>This page is under construction</h2>
      <img className={style.image} src={image} alt="avatar" />
    </div>
  );
};

export default Contact;
