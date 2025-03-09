import React from "react";
import styles from "./HomePage.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const HomePage = () => {
  return (
    <section className={styles.homePage_container}>
      <div className={styles.grid_overlay}></div>
      <div className={styles.wrapper}>
        <h1>Powering Web3 Growth with Performance-Based Rewards</h1>
        <p>
          Say goodbye to wasted marketing budgets! EngageVest ensures
          influencers and users earn based on real engagement, not fake metrics.
          Powered by Solana smart contracts for full transparency.
        </p>

        <WalletMultiButton>Connect Wallet</WalletMultiButton>
      </div>
    </section>
  );
};

export default HomePage;
