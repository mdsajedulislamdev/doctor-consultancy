import React from "react";
import style from "./About.module.css";
import image from "../../../src/images/animated/service.jpg";

const About = () => {
  return (
    <div className={style.About}>
      <h1>About Section</h1>
      <h2>This page is under construction</h2>
      <img className={style.image} src={image} alt="avatar" />
    </div>
  );
};

export default About;
