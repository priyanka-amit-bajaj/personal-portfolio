import React from "react";
import styles from "./SocialIcons.module.css";

// Import custom icons from assets
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import twitterIcon from "../../assets/twitter.png";

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/your-profile", icon: twitterIcon },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/your-profile", icon: linkedinIcon },
  { name: "GitHub", url: "https://github.com/your-profile", icon: githubIcon },
];

const SocialIcons = () => {
  return (
    <div className={styles.socialContainer}>
      {socialLinks.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
          <img src={social.icon} alt={social.name} className={styles.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
