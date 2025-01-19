import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import Typed.js library
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const typedRef = useRef(null); // Create a ref for the Typed.js target element

  useEffect(() => {
    // Initialize Typed.js with options
    const typed = new Typed(typedRef.current, {
      strings: ["Full Stack Web Developer"], // Strings to type
      typeSpeed: 100, // Typing speed
      backSpeed: 100, // Backspacing speed
      backDelay: 1000, // Delay before typing starts again
      loop: true, // Loop the typing animation
    });

    return () => {
      typed.destroy(); // Cleanup the Typed.js instance when component unmounts
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Trisha Bharti</h1>
        <h3 className={styles.textLine}>
          And I'm a  <span ref={typedRef} className={styles.text}></span> 
        </h3>
       
       

        <div className = {styles.contacts}>
          <a href ="https://www.facebook.com/profile.php?id=100090519741553"><i class='bx bxl-facebook'></i> </a>
          <a href = "#"><i class='bx bxl-instagram'></i></a>
          <a href = "https://github.com/Trisha04bharti"><i class='bx bxl-github'></i></a>
          <a href = "https://www.linkedin.com/in/trisha-bharti-96100a261/"><i class='bx bxl-linkedin' ></i></a>

        </div>

      </div>
      <img
        src={getImageUrl("hero/abcd.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};


