import React, { useState } from "react";
import styles from "./AvatarCustomizer.module.css";
import staticNoise from "../../assets/static-noise.gif";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";

const avatars = [
  { name: "Cyber Glitch", img: avatar1, mask: avatar1 },
  { name: "Pixel Wizard", img: avatar2, mask: avatar2 },
  { name: "Synth Hacker", img: avatar3, mask: avatar3 },
];

const AvatarCustomizer = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  // Generate random rotation for sticker (between -5 and +5 degrees)
  const randomRotation = Math.floor(Math.random() * 10) - 5;

  const handleAvatarChange = (event) => {
    const newAvatar = avatars.find((avatar) => avatar.name === event.target.value);
    setSelectedAvatar(newAvatar);
  };

  return (
    <div className={styles.avatarContainer}>
      {/* Dropdown to select avatar */}
      <select className={styles.avatarDropdown} onChange={handleAvatarChange} value={selectedAvatar.name}>
        {avatars.map((avatar) => (
          <option key={avatar.name} value={avatar.name}>
            {avatar.name}
          </option>
        ))}
      </select>

      {/* Old TV with Static Effect */}
      <div className={styles.oldTV} style={{ backgroundImage: `url(${staticNoise})` }}>
        {/* Avatar Sticker with Dynamic Mask */}
        <img
          src={selectedAvatar.img}
          alt="Avatar"
          className={styles.sticker}
          style={{
            transform: `translate(-50%, -50%) rotate(${randomRotation}deg)`,
            WebkitMaskImage: `url(${selectedAvatar.mask})`,
            maskImage: `url(${selectedAvatar.mask})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default AvatarCustomizer;
