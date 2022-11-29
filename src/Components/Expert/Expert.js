import React from "react";
import style from "./Expert.module.css";
import DTwo from "../../../src/images/expert/DTwo.png";
import doctor from "../../../src/images/expert/doctor.png";

const Notice = () => {
  return (
    <div className={style.expert}>
      <div>
        <h1 className={style.title}>Our Medical Experts</h1>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare,
          <br /> eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={style.mainDiv}>
        <div className={style.imageDiv}>
          <img className={style.image} src={doctor} alt="avatar" />
          <div className={style.contentDiv}>
            <div>
              <p className={style.doctorName}>Dr. Emrul Kayes</p>
              <p className={style.doctorTitle}>MBBS, FCFS, BCS, BSCBS</p>
              <p className={style.doctorDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
            </div>
            <div>
              <button className={style.button}>BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={doctor} alt="avatar" />
          <div className={style.contentDiv}>
            <div>
              <p className={style.doctorName}>Dr. Emrul Kayes</p>
              <p className={style.doctorTitle}>MBBS, FCFS, BCS, BSCBS</p>
              <p className={style.doctorDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
            </div>
            <div>
              <button className={style.button}>BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className={style.imageDiv}>
          <img className={style.image} src={doctor} alt="avatar" />
          <div className={style.contentDiv}>
            <div>
              <p className={style.doctorName}>Dr. Emrul Kayes</p>
              <p className={style.doctorTitle}>MBBS, FCFS, BCS, BSCBS</p>
              <p className={style.doctorDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
            </div>
            <div>
              <button className={style.button}>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
