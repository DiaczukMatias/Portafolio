import React from "react";
import styles from "../cssModules/Proyects.module.css";
import MyProyect from "../images/myProyect.jpeg";
import forgefit from "../images/forgefit.png";
import STARRRLIINK from "../images/STARRRLIINK.png";

const Proyects = () => {
  const proyects = [
    {
      id: 1,
      title: "Proyect 1",
      description: "Description of proyect 1",
      imageUrl: MyProyect,
      link: "https://ricky-morty-fij7w1ysb-matias-projects-446819e4.vercel.app/",
    },
    {
      id: 1,
      title: "Proyect 1",
      description: "Description of proyect 1",
      imageUrl: forgefit,
      link: "https://pf-webgym-qv6r.vercel.app/",
    },
    {
      id: 1,
      title: "Proyect 1",
      description: "Description of proyect 1",
      imageUrl: STARRRLIINK,
      link: "https://lnkd.in/d3kxQvy8",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mis Proyectos</h1>
      <div className={styles.proyects}>
        {proyects.map((proyect) => (
          <a
            key={proyect.id}
            href={proyect.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.proyectCard}>
              <img
                src={proyect.imageUrl}
                alt={proyect.title}
                className={styles.proyectImage}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
