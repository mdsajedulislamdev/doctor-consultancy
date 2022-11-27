import React from "react";
import Home from "../Home/Home";
import style from "./MainBody.module.css";

const MainBody = () => {
  return (
    <div className={style.MainBody}>
      <Home></Home>
    </div>
  );
};

export default MainBody;
