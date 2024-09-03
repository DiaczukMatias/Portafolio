import React from "react";
import styles from "../cssModules/SocialLinks.module.css";
import { FaWhatsapp, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      url: "https://wa.me/+5491131397638",
    },
    {
      id: 2,
      icon: <FaGithub />,
      url: "https://github.com/DiaczukMatias",
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      url: "mailto:diaczukm@gmail.com",
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/matias-diaczuk-88728522a/?trk=opento_sprofile_goalscard",
    },
  ];

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.card}>{link.icon}</div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
