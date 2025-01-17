import React from "react";
import { CIcon } from "@coreui/icons-react";  // Correct import for CIcon
import { cibLeetcode } from "@coreui/icons";  // Correct import for cibLeetcode
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I'm a B.Tech student in Information Technology at IIIT Allahabad, driven by a passion for technology and innovation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Competitive Programming</h3>
              <p>
                I am a 3-star coder on CodeChef and a Knight on LeetCode, having solved more than 600 questions across various platforms
              </p>
            
              <div className={styles.contacts}>
  <a href="https://leetcode.com/u/IamTrisha04/" className={styles.iconWrapper}>
    <img
      src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000"
      alt="LeetCode Icon"
      className={styles.icon}
    />
    <span className={styles.iconText}>LeetCode</span>
  </a>
  <a href="#" className={styles.iconWrapper}>
    <img
      src="https://img.icons8.com/?size=100&id=4z2zrIWYmGqx&format=png&color=000000"
      alt="CodeChef Icon"
      className={styles.icon}
    />
    <span className={styles.iconText}>CodeChef</span>
  </a>
</div>


            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

