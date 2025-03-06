import React from "react";
import styles from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to="/">EngageVest</Link>
      </div>

      <div className={styles.navbar_links}>
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="campaigns"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
          }
        >
          Campaigns
        </NavLink>

        <NavLink
          to="referrals"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
          }
        >
          Referrals
        </NavLink>
      </div>

      <Button text="Connect Wallet" />
    </div>
  );
};

export default NavBar;
