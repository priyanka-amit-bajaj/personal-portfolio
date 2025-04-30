import React from "react";
import styles from "./ProjectIcons.module.css";

const projectData = ["Crown", "Game Controller", "COO", "VS"];

function ProjectIcons() {
  return (
    <div className={styles.projectsGrid}>
      {projectData.map((project, index) => (
        <div key={index} className={styles.projectIcon}>{project}</div>
      ))}
    </div>
  );
}

export default ProjectIcons;
