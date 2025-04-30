import React from "react";
import styles from "./PlayerStats.module.css";

const PlayerStats = () => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.playerStats}>
        <p>🎮 PLAYER: PRIYANKA BAJAJ</p>
        <p>💾 LEVEL: 22 (Experience)</p>
        <p>🏆 CLASS: SOFTWARE ENGINEER</p>
        <p>📍 LOCATION: ONTARIO, CANADA</p>
        <p>💡 SKILLS: CLOUD, AI, FRONTEND</p>
        <p>🔥 POWER-UPS: GCP, GPT, BIGQUERY</p>
      </div>
    </div>
  );
};

export default PlayerStats;
