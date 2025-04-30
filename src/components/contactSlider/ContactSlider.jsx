import React, { useState, useRef } from "react";
import styles from "./ContactSlider.module.css";

const ContactSlider = () => {
  const [slideComplete, setSlideComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    const sliderRect = slider.parentElement.getBoundingClientRect();
    const startX = e.clientX;

    const handleMouseMove = (event) => {
      const offsetX = event.clientX - startX;
      const maxOffset = sliderRect.width - slider.offsetWidth;
      
      if (offsetX >= maxOffset) {
        setSlideComplete(true);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        setTimeout(() => setIsModalOpen(true), 300); // Show modal after sliding
      } else {
        slider.style.transform = `translateX(${Math.max(0, offsetX)}px)`;
      }
    };

    const handleMouseUp = () => {
      if (!slideComplete) {
        sliderRef.current.style.transform = "translateX(0px)";
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles.contactContainer}>
      {/* Slider UI */}
      <div className={styles.sliderTrack}>
        <div
          className={styles.sliderButton}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
        >
          CONTACT ME
        </div>
        <div className={styles.arrowIcon}>→</div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Contact Information</h2>
            <p>📧 <a href="mailto:pabajaj@uwaterloo.ca">pabajaj@uwaterloo.ca</a></p>
            <p>📧 <a href="mailto:bajajpriyanka619@gmail.com">bajajpriyanka619@gmail.com</a></p>
            <p>📞 <a href="tel:+16475189155">+1 (647) 518-9155</a></p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSlider;
