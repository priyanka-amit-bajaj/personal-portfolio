import React, { useEffect, useState } from "react";
import styles from "./SpeakerVisualizer.module.css";

function SpeakerVisualizer() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.speaker} ${isActive ? styles.pulse : ""}`}></div>
  );
}

export default SpeakerVisualizer;
