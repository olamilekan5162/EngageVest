import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>ENGAGEVEST</div>

      <div className={styles.navbar_links}>
        <NavLink
          to="dashboard"
          className={({ isActive }) => (isActive ? `${styles.active} ${styles.navLink}`: styles.navLink)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="campaigns"
          className={({ isActive }) => (isActive ? `${styles.active} ${styles.navLink}`: styles.navLink)}
        >
          Campaigns
        </NavLink>

        <NavLink
          to="referrals"
          className={({ isActive }) => (isActive ? `${styles.active} ${styles.navLink}` : styles.navLink)}
        >
          Referrals
        </NavLink>
      </div>

      <button className={styles.connectWallet}>Connect Wallet</button>
    </div>
  );
};

export default NavBar;
