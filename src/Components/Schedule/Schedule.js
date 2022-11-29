import React from "react";
import style from "./Schedule.module.css";
import image from "../../../src/images/schedule/GroupImage.png";
import LeftImage from "../../../src/images/schedule/LeftGroup.png";

const Schedule = () => {
  return (
    <div className={style.schedule}>
      <div className={style.scheduleMainDiv}>
        <h1 className={style.scheduleTitle}>Doctor's Schedule Today</h1>
        <div className={style.scheduleContentDiv} id={style.scheduleContentDiv}>
          <h2 className={style.scheduleTime}>08:00</h2>
          <div>
            <h3 className={style.DoctorDesignation}>General Practitioner</h3>
            <h4 className={style.doctorName}>Dr. Robbert Algazali</h4>
          </div>
        </div>
        <div className={style.scheduleContentDiv}>
          <h2 className={style.scheduleTime}>09:00</h2>
          <div>
            <h3 className={style.DoctorDesignation}>General Practitioner</h3>
            <h4 className={style.doctorName}>Dr. Robbert Algazali</h4>
          </div>
        </div>
        <div className={style.scheduleContentDiv}>
          <h2 className={style.scheduleTime}>10:00</h2>
          <div>
            <h3 className={style.DoctorDesignation}>General Practitioner</h3>
            <h4 className={style.doctorName}>Dr. Robbert Algazali</h4>
          </div>
        </div>
        <div className={style.scheduleContentDiv}>
          <h2 className={style.scheduleTime}>11:00</h2>
          <div>
            <h3 className={style.DoctorDesignation}>General Practitioner</h3>
            <h4 className={style.doctorName}>Dr. Robbert Algazali</h4>
          </div>
        </div>
        <div className={style.scheduleContentDiv}>
          <h2 className={style.scheduleTime}>12:00</h2>
          <div>
            <h3 className={style.DoctorDesignation}>General Practitioner</h3>
            <h4 className={style.doctorName}>Dr. Robbert Algazali</h4>
          </div>
        </div>
      </div>
      <img className={style.image} src={image} alt="avatar" />
      <img className={style.LeftImage} src={LeftImage} alt="avatar" />
    </div>
  );
};

export default Schedule;
