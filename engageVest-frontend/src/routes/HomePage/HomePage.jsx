import React from 'react'
import styles from './HomePage.module.css'
import Button  from '../../components/Button/Button';
import NavBar from '../../components/NavBar/NavBar';
import { Connect } from 'vite';

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

        <Button text="Connect Wallet" />
      </div>
    </section>
  );
}

export default HomePage