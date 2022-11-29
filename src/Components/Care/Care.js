import React from "react";
import style from "./Care.module.css";
import serviceOne from "../../../src/images/care/Service0.png";
import serviceTwo from "../../../src/images/care/Service-1.png";
import serviceThree from "../../../src/images/care/Service-2.png";
import serviceFour from "../../../src/images/care/Service-3.png";
import serviceFive from "../../../src/images/care/Service-4.png";
import serviceFix from "../../../src/images/care/Service-5.png";
import serviceSeven from "../../../src/images/care/Service-6.png";
import serviceEight from "../../../src/images/care/Service-7.png";

const Care = () => {
  return (
    <div className={style.care}>
      <div className={style.titleDiv}>
        <h1 className={style.titleOne}>Our Medical Care</h1>
        <h3 className={style.titleTwo}>Services We Provide</h3>
      </div>
      <div className={style.imageContainer}>
        <div className={style.imageDiv}>
          <img className={style.imageOne} src={serviceOne} alt="avatar" />
          <img className={style.imageTwo} src={serviceTwo} alt="avatar" />
          <img className={style.imageThree} src={serviceThree} alt="avatar" />
          <img className={style.imageFour} src={serviceFour} alt="avatar" />
          <img className={style.imageFive} src={serviceFive} alt="avatar" />
          <img className={style.imageSix} src={serviceFix} alt="avatar" />
          <img className={style.imageSeven} src={serviceSeven} alt="avatar" />
          <img className={style.imageEight} src={serviceEight} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Care;
