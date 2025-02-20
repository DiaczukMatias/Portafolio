import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../cssModules/Sidebar.module.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${styles.container} ${open ? "open" : ""}`}
      onClick={toggleOpen}
    >
      <img
        src="https://th.bing.com/th/id/OIP.vntn81TJvWUbNRMxNZfJTgAAAA?pid=ImgDet&w=199&h=276&c=7"
        alt="Avatar"
        className={styles.avatar}
      />
      <div>
        <h2 className={styles.name}>Matias Diaczuk</h2>
        <p className={styles.dev}>Front-end Developer</p>
      </div>
      <ul className={styles.contactInfo}>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <strong>Email</strong>
            <span>diaczukm@mail.com</span>
          </div>
        </li>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <strong>Phone</strong>
            <span>+54 1131397638</span>
          </div>
        </li>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <strong>Date of Birth</strong>
            <span>06/04/1998</span>
          </div>
        </li>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          </div>
          <div className={styles.textWrapper}>
            <strong>Location</strong>
            <span>Buenos Aires, Argentina</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
