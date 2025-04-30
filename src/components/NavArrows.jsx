import React from "react";
import styles from "./NavArrows.module.css";

function NavArrows({ onPrev, onNext }) {
  return (
    <div className={styles.navArrows}>
      <button onClick={onPrev} className={styles.arrow}>&larr;</button>
      <button onClick={onNext} className={styles.arrow}>&rarr;</button>
    </div>
  );
}

export default NavArrows;
