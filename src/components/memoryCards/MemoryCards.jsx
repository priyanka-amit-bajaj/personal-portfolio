import React, { useState } from "react";
import styles from "./MemoryCards.module.css";

const saveSlots = [
  { id: 1, title: "Work Experience", details: "💼 Johnson & Johnson, Google Cloud" },
  { id: 2, title: "Education", details: "🎓 University of Waterloo - Math & CS" },
  { id: 3, title: "Skills", details: "🛠 React, GCP, AI, Gamified UI" },
];

const MemoryCards = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className={styles.memoryCards}>
      {saveSlots.map((slot) => (
        <div 
          key={slot.id} 
          className={`${styles.memoryCard} ${selectedSlot === slot.id ? styles.active : ""}`}
          onClick={() => setSelectedSlot(slot.id === selectedSlot ? null : slot.id)}
        >
          <div className={styles.cardHeader}>
            <p className={styles.cardTitle}>{slot.title}</p>
            <span className={styles.ledIndicator}></span> {/* Small glowing LED */}
          </div>
          
          <div className={`${styles.detailsContainer} ${selectedSlot === slot.id ? styles.expanded : ""}`}>
            <p className={styles.details}>{slot.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemoryCards;
