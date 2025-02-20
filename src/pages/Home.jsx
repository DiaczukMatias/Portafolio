import React, { useState } from "react";
import styles from "../cssModules/Home.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import SocialLinks from "./SocialLinks";
import Proyects from "./Proyects";

function Home() {
  const [render, setRender] = useState("about");

  const sections = [
    { name: "About", id: "about" },
    { name: "Proyects", id: "proyects" },
    { name: "Contact", id: "contact" },
  ];

  const handleRender = (id) => {
    setRender(id);
  };

  return (
    <div className={styles.All}>
      <Sidebar />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <Navbar sections={sections} handleRender={handleRender} />
          {render === "about" ? (
            <>
              <About />
              <Services />
            </>
          ) : render === "proyects" ? (
            <Proyects />
          ) : (
            <>
              <Contact />
              <SocialLinks />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
