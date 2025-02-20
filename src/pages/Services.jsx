import React from "react";
import styles from "../cssModules/Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>My Techs</h3>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Solicitudes a Backend</h3>
          <p className={styles.cardDescription}>
            Implementación eficiente de fetch/axios para consumir APIs y manejar
            datos dinámicos.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Diseño Moderno y Maquetación</h3>
          <p className={styles.cardDescription}>
            Creación de interfaces atractivas y funcionales con un enfoque en
            UX/UI.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Código Tipado y Reutilizable</h3>
          <p className={styles.cardDescription}>
            Desarrollo modular y mantenimiento de código limpio con TypeScript y
            buenas prácticas.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Creación de Formularios y Validaciones</h3>
          <p className={styles.cardDescription}>
            Construcción de formularios interactivos con validaciones
            personalizadas y manejo de estados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
