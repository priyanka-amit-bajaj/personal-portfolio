import React from "react";
import AvatarCustomizer from "./avatarCustomizer/AvatarCustomizer";
import ContactSlider from "./contactSlider/ContactSlider";
import FaceCustomizer from "./faceCustomizer/FaceCustomizer";
import PortfolioBox from "./portfolioBox/PortfolioBox";
import SocialIcons from "./socialIcons/SocialIcons";
import PlayerStats from "./playerStats/PlayerStats";
import MemoryCards from "./memoryCards/MemoryCards";
import styles from "./PortfolioUI.module.css";

const PortfolioUI = () => {
  return (
    <div className={styles.container}>
      {/* Left Column (Avatar, Contact, Customization) */}
      <div className={styles.column}>
        <div className={styles.box}><AvatarCustomizer /></div>
        <div className={styles.box}><ContactSlider /></div>
        <div className={styles.box}><FaceCustomizer /></div>
      </div>

      {/* Center Column (Portfolio TV, Social Icons) */}
      <div className={styles.column}>
        <div className={styles.box}><SocialIcons /></div>
        <div className={styles.box}><PortfolioBox /></div>
      </div>

      {/* Right Column (Side Projects, Extra Info) */}
      <div className={styles.column}>
        <div className={styles.box}><PlayerStats /></div>
        <div className={styles.box}><MemoryCards /></div>
      </div>
    </div>
  );
};

export default PortfolioUI;
