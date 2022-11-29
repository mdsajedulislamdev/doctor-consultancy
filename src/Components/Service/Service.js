import React from "react";
import style from "./Service.module.css";
import DoctorGroup from "../../../src/images/SickKidImage/DoctorGroup.png";
import leftCard from "../../../src/images/SickKidImage/leftCard.png";
import rightCard from "../../../src/images/SickKidImage/rightCard.png";
import logo from "../../../src/images/SickKidImage/Vector.png";

const Service = () => {
  return (
    <div className={style.service}>
      <div>
        <img className={style.DoctorGroup} src={DoctorGroup} alt="avatar" />
        <img className={style.leftCard} src={leftCard} alt="avatar" />
        <img className={style.rightCard} src={rightCard} alt="avatar" />
      </div>
      <div className={style.sickKid}>
        <h1 className={style.title}>
          Sick Kid? How to Deal with a <br /> Child's Fever: 4 Steps
        </h1>
        <div className={style.logoContentDiv}>
          <div className={style.logoDiv}>
            <img className={style.logo} src={logo} alt="logo" /> <h4 className={style.logoText}>Cras sit sed nec a nunc</h4>
          </div>
          <div className={style.logoDiv}>
            <img className={style.logo} src={logo} alt="logo" /> <h4 className={style.logoText}>Tempor mauris mauris in</h4>
          </div>
          <div className={style.logoDiv}>
            <img className={style.logo} src={logo} alt="logo" /> <h4 className={style.logoText}>Nibh turpis praesent pretium</h4>
          </div>
          <div className={style.logoDiv}>
            <img className={style.logo} src={logo} alt="logo" /> <h4 className={style.logoText}>Cras sit sed nec a nunc</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
