import React from "react";
import styles from "../cssModules/Proyects.module.css";
import MyProyect from "../images/myProyect.jpeg";
import MyProyect2 from "../images/myProyect2.jpeg";

const Proyects = () => {
  const proyects = [
    {
      id: 1,
      title: "Proyect 1",
      description: "Description of proyect 1",
      imageUrl: MyProyect,
      link: "https://ricky-morty-theta.vercel.app/",
    },
    {
      id: 2,
      title: "Proyect 2",
      description: "Description of proyect 2",
      imageUrl: MyProyect2,
      link: "https://ricky-morty-theta.vercel.app/",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Proyects</h1>
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
