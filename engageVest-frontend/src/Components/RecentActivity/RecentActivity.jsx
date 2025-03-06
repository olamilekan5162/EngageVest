import React from "react";
import styles from "./RecentActivity.module.css";

const RecentActivity = () => {
  
  const activityData = [
    { id: 1, text: "You earned 50 ENG tokens from referrals!", time: "2 hours ago" },
    { id: 2, text: "New campaign joined: 'Solana Growth Drive'", time: "5 hours ago" },
    { id: 3, text: "Your referral just claimed their reward!", time: "1 day ago" }
  ];

  return (
    <div className={styles.activityContainer}>
      <h2>Recent Activity</h2>
      <ul className={styles.activityList}>
        {activityData.map((item) => (
          <li key={item.id} className={styles.activityItem}>
            <p>{item.text}</p>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
