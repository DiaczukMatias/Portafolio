import React from "react";
import styles from "../cssModules/About.module.css";

function About() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.h1}>Sobre Mi</h1>
      <p className={styles.p}>
        Soy un desarrollador web con un fuerte enfoque en el frontend. Me
        apasiona crear interfaces de usuario intuitivas y visualmente atractivas
        que ofrezcan una excelente experiencia al usuario. Actualmente, estoy
        finalizando mis estudios en SoyHenry, donde me estoy especializando en
        desarrollo FullStack.
        <p>
          Mi objetivo es combinar mis habilidades en diseño y programación para
          desarrollar aplicaciones web robustas y eficientes. Estoy comprometido
          con el aprendizaje continuo y la mejora constante de mis habilidades
          para mantenerme al día con las últimas tendencias tecnológicas. Soy
          una persona proactiva, con gran capacidad para trabajar en equipo y
          cumplir con los plazos establecidos. Mi disponibilidad horaria es
          amplia y me adapto fácilmente a nuevos desafíos. Estoy comprometido
          con el aprendizaje continuo y me mantengo actualizado sobre las
          últimas tendencias tecnológicas."
        </p>
      </p>
      <div className={styles.separator}></div>
    </div>
  );
}

export default About;
