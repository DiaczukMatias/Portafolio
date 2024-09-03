import React from "react";
import styles from "../cssModules/Services.module.css";

function Services() {
  return (
    <>
      <div>
        <h2 className={styles.h2}>My Technologies</h2>
      </div>
      <div className={styles.services}>
        <div className={`${styles.service} ${styles.js}`}>
          <img
            src="https://th.bing.com/th/id/OIP.Y4VPmWW2m4_V2WFYOEGYRgHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7"
            alt="JavaScript Logo"
            className={styles.logo}
          />
          <h3>Javascript</h3>
          <p>
            The core language of the web, enabling dynamic content and
            interactivity.
          </p>
        </div>
        <div className={`${styles.service} ${styles.react}`}>
          <img
            src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
            alt="React Logo"
            className={styles.logo}
          />
          <h3>React</h3>
          <p>
            A powerful library for building fast and interactive user
            interfaces.
          </p>
        </div>
        <div className={`${styles.service} ${styles.redux}`}>
          <img
            src="https://th.bing.com/th/id/R.8251fe76d7487a28b07603515b300964?rik=H7lrBp652zDaWg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f5848309bcef1014c0b5e4a9a.png&ehk=N%2fi7UuvK4YyoLcxusdDEWeftPaGIfNJl2VmpTOtLt%2bA%3d&risl=&pid=ImgRaw&r=0"
            alt="Redux Logo"
            className={styles.logo}
          />
          <h3>Redux</h3>
          <p>
            State management tool, maintaining predictable states in large
            applications.
          </p>
        </div>
        <div className={`${styles.service} ${styles.ts}`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt="Typescript Logo"
            className={styles.logo}
          />
          <h3>Typescript</h3>
          <p>
            A strongly typed programming language that builds on JavaScript.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
