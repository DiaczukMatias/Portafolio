import React from "react";
import styles from "../cssModules/Proyects.module.css";
import MyProyect from "../images/myProyect.jpeg";
import forgefit from "../images/forgefit.png";
import STARRRLIINK from "../images/STARRRLIINK.png";
import capturaExpoo from "../images/capturaExpoo.png";

const Proyects = () => {
  const proyects = [
    {
      id: 1,
      title: "Proyect 1",
      description: "React.Js, Axios, Material UI, REST API",
      imageUrl: MyProyect,
      link: "https://ricky-morty-fij7w1ysb-matias-projects-446819e4.vercel.app/",
    },
    {
      id: 2,
      title: "Proyect 2",
      description:
        "Next.Js, TypeScript, Tailwind CSS, Pasarela de pagos, NextAuth, MapTiler, LandBot",
      imageUrl: forgefit,
      link: "https://pf-webgym-qv6r.vercel.app/",
    },
    {
      id: 3,
      title: "Proyect 3",
      description: "Next.Js, TypeScript, REST API, fetch API",
      imageUrl: STARRRLIINK,
      link: "https://lnkd.in/d3kxQvy8",
    },
    {
      id: 4,
      title: "Proyect 4",
      description: "React Native,Expo, TypeScript, REST API, Fetch API",
      imageUrl: capturaExpoo,
      link: "https://lnkd.in/db4Xy35z",
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
            className={styles.proyectCard}
          >
            <img
              src={proyect.imageUrl}
              alt={proyect.title}
              className={styles.proyectImage}
            />
            <p className={styles.description}>{proyect.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
