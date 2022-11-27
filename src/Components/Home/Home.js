import React from "react";
import style from "./Home.module.css";
import logo from "../../../src/images/HeaderImage/sideDesign.svg";
import groupOne from "../../../src/images/HeaderImage/GroupOne.png";
import groupTwo from "../../../src/images/HeaderImage/GroupTwo.png";
import grid from "../../../src/images/HeaderImage/DotGrid.png";
const Home = () => {
  return (
    <div className={style.headDiv}>
      <div className={style.contentDiv}>
        <h1 className={style.advice}>Find The Care</h1>
        <h1 className={style.advice}>You Need</h1>
        <p className={style.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit.</p>
        <button className={style.button}>Make Appointment</button>
      </div>
      <div>
        <img className={style.sideDesign} src={logo} alt="logo" />
        <img className={style.grid} src={grid} alt="logo" />
      </div>
      <div className={style.groupOneDiv}>
        <img className={style.groupOneImage} src={groupOne} alt="avatar" />
      </div>
      <div className={style.groupTwoDiv}>
        <img className={style.groupTwoImage} src={groupTwo} alt="avatar" />
      </div>
    </div>
  );
};

export default Home;
