import React, { useState } from "react";
import styles from "./FaceCustomizer.module.css";

const roles = [
  { name: "Graphic & Webdesigner", key: "graphicWeb" },
  { name: "Motion Designer", key: "motionDesign" },
  { name: "Webflow Expert", key: "webflow" },
];

const FaceCustomizer = () => {
  const [toggledRoles, setToggledRoles] = useState({
    graphicWeb: false,
    motionDesign: false,
    webflow: false,
  });

  const handleToggle = (roleKey) => {
    setToggledRoles((prev) => ({
      ...prev,
      [roleKey]: !prev[roleKey],
    }));
  };

  return (
    <div className={styles.faceCustomizer}>
      <div className={styles.header}>
        <span className={styles.icon}>⚙️</span> Face Customizer
      </div>
      {roles.map((role) => (
        <div key={role.key} className={`${styles.roleItem} ${toggledRoles[role.key] ? styles.active : ""}`}>
          <label className={styles.switch}>
            <input type="checkbox" checked={toggledRoles[role.key]} onChange={() => handleToggle(role.key)} />
            <span className={styles.slider}></span>
          </label>
          <span className={styles.roleName}>{role.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FaceCustomizer;
