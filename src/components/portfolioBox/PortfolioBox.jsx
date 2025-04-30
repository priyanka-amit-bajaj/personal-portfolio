import React, { useState } from "react";
import styles from "./PortfolioBox.module.css";

// Import Arrow PNGs
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

// Placeholder projects (Update later)
const projects = [
  { title: "Project 1", img: "/projects/project1.png" },
  { title: "Project 2", img: "/projects/project2.png" },
  { title: "Project 3", img: "/projects/project3.png" },
];

const PortfolioBox = () => {
  const [currentProject, setCurrentProject] = useState(-1); // ✅ Default: -1 (Static)
  const [hasSwitched, setHasSwitched] = useState(false);

  const handleChannelChange = (direction) => {
    setHasSwitched(true);

    setCurrentProject((prev) => {
      if (prev === -1) return 0; // ✅ First click goes to CH 1
      if (direction === "next") {
        return prev === projects.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? projects.length - 1 : prev - 1;
      }
    });
  };

  return (
    <div className={styles.portfolioContainer}>
      {/* TV Screen */}
      <div className={styles.tvScreen}>
        {/* Static Screen Before Switching Channels */}
        {currentProject === -1 && <div className={styles.static}></div>}

        {/* Show Project Image Only After Switching */}
        {currentProject !== -1 && (
          <img src={projects[currentProject].img} alt="Project" className={styles.projectImage} />
        )}
      </div>

      {/* Status Panel + Arrows in One Row */}
      <div className={styles.statusContainer}>
        <div className={styles.statusPanel}>
          <div className={styles.channelDisplay}>
            {currentProject === -1 ? "CHANNEL UNAVAILABLE" : `CH ${currentProject + 1}`}
          </div>
        </div>

        {/* Channel Knob Controls (Right Aligned) */}
        <div className={styles.controls}>
          <button className={styles.knob} onClick={() => handleChannelChange("prev")}>
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className={styles.knob} onClick={() => handleChannelChange("next")}>
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      </div>

      {/* Subtitle Below */}
      <div className={styles.nowPlaying}>
        {currentProject === -1 ? "Flip channels to view projects" : projects[currentProject].title}
      </div>
    </div>
  );
};

export default PortfolioBox;
