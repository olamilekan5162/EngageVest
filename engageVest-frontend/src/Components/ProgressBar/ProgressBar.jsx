import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.labelContainer}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
