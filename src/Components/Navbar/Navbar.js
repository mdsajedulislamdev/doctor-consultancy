// import Hamburger from "../Hamburger/Hamburger";
import styles from "./Navbar.module.css";
import { BsListUl, BsX } from "react-icons/bs";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <div>
      <div className={isMobileMenu ? styles.mobileMenu : styles.Navbar} onClick={() => setIsMobileMenu(false)}>
        <a className={styles.NavTitle} href="/">
          DOCTOR CONSULTANCY
        </a>
        <a className={styles.NavItem} href="/">
          Home
        </a>
        <a className={styles.NavItem} href="/service">
          Service
        </a>
        <a className={styles.NavItem} href="/about">
          About
        </a>
        <a className={styles.NavItem} href="/contact">
          Contact
        </a>
        <a className={styles.NavItem} href="/notice">
          Notice
        </a>
        <button className={styles.Button} id={styles.loginButton} href="#">
          LOGIN
        </button>
        <button className={styles.Button} id={styles.signUpButton} href="#">
          SIGNUP
        </button>
      </div>
      <div>{isMobileMenu ? <BsX className={styles.iconCross} onClick={() => setIsMobileMenu(false)} /> : <BsListUl className={styles.iconBurger} onClick={() => setIsMobileMenu(true)} />}</div>
    </div>
  );
};

export default Navbar;

// BsListUl
// BsX
