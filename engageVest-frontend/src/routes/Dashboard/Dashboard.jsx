import styles from "./Dashboard.module.css";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import RecentActivity from "../../components/RecentActivity/RecentActivity";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vestingProgress, setVestingProgress] = useState(20);

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1> Your Dashboard</h1>
      </div>

      <div className={styles.stats}>
        <div className={styles.statBox}>
          <h3>Total Earnings</h3>
          <p>0.00 SOL</p>
        </div>
        <div className={styles.statBox}>
          <h3>Total Referrals</h3>
          <p>0</p>
          <Button text="View" onClick={() => setIsModalOpen(true)} />
        </div>
        <div className={styles.statBox}>
          <h3>Vesting Progress</h3>
          <ProgressBar label="Vested Tokens" percentage={60} />
          <ProgressBar label="Referral Rewards" percentage={40} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Your Referral Details"
      >
        <p>
          Your referral link:{" "}
          <strong>https://engagevest.app//freed/ref/12345</strong>
        </p>
        <Button text="Copy Link" onClick={() => alert("Copied!")} />
      </Modal>

      <RecentActivity />
    </div>
  );
};

export default Dashboard;
