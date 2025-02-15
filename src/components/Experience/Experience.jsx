import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (

    



    <section className={styles.container} id="experience">
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Skills</h2>
      </div>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>

      {/* Courses Section */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Courses</h2>
      </div>
      <div className={styles.courses}>
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>Database Management System</li>
          <li>Operating System</li>
          <li>Computer Networks</li>
          <li>Object Oriented Programming</li>
        </ul>
      </div>

      

  
    </section>
  );
}; 







