import React from "react";
import styles from "../cssModules/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";


function Sidebar() {
  return (
    <div className={styles.container}>
      <img
        src="https://th.bing.com/th/id/OIP.vntn81TJvWUbNRMxNZfJTgAAAA?pid=ImgDet&w=199&h=276&c=7"
        alt="Avatar"
        className={styles.avatar}
      />
      <div className={styles.separator}></div>
      <h2>Matias Diaczuk</h2>
      <p>Web Developer & Designer</p>
      <ul className={styles.contactInfo}>
        <li>
          

          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <div className={styles.textWrapper}>
            <strong>Email</strong>
            <span>example@mail.com</span>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <div className={styles.textWrapper}>
            <strong>Phone</strong>
            <span>+123 456 7890</span>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
          <div className={styles.textWrapper}>
            <strong>Date of Birth</strong>
            <span>06/04/1998</span>
          </div>
        </li>
        <li>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          <div className={styles.textWrapper}>
            <strong>Location</strong>
            <span>San Luis, Argentina</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
