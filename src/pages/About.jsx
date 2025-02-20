import React from "react";
import styles from "../cssModules/About.module.css";

function About() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.h1}>Sobre mí</h1>
      <p className={styles.p}>
        Soy un desarrollador FullStack certificado, con un fuerte enfoque en
        frontend 🎨💻. Me apasiona crear interfaces intuitivas y atractivas,
        brindando experiencias de usuario de alto nivel 🚀. Tengo experiencia
        con JavaScript, TypeScript, React, React Native, Redux, Expo, Material
        UI y Bootstrap, además de conocimientos en backend con Express, MongoDB
        y PostgreSQL 🛠️.
        <p>
          Me encanta fusionar diseño y programación para desarrollar
          aplicaciones modernas y eficientes. Siempre busco aprender y mejorar,
          me adapto rápido a nuevos desafíos y disfruto trabajar en equipo 🤝.
          ¡Listo para nuevos proyectos! 🚀
        </p>
      </p>
      <div className={styles.separator}></div>
    </div>
  );
}

export default About;
