import React from "react";
import { FaServer, FaPalette, FaWpforms } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import styles from "../cssModules/Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Mi Stack</h3>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Solicitudes a Backend</h3>
            <FaServer className={styles.icon} />
          </div>
          <p className={styles.cardDescription}>
            Implementación eficiente de fetch/axios para consumir APIs y manejar
            datos dinámicos.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Diseño Moderno y Maquetación</h3>
            <FaPalette className={styles.icon} />
          </div>
          <p className={styles.cardDescription}>
            Creación de interfaces atractivas y funcionales con un enfoque en
            UX/UI.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Código Tipado y Reutilizable</h3>
            <SiTypescript className={styles.icon} />
          </div>
          <p className={styles.cardDescription}>
            Desarrollo modular y mantenimiento de código limpio con TypeScript y
            buenas prácticas.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Formularios y Validaciones</h3>
            <FaWpforms className={styles.icon} />
          </div>
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
