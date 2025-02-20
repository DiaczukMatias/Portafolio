import React, { useState } from "react";
import styles from "../cssModules/Navbar.module.css";
import DowlandCV from "./DowlandCV";

const Navbar = ({ sections, handleRender }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("about"); // Estado para la sección seleccionada

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (id) => {
    setSelectedSection(id); // Actualizamos la sección seleccionada
    handleRender(id); // Llamamos a la función handleRender pasada como props
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <span
          className={`${styles["navbar-toggle"]} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={handleToggleMenu}
        >
          &#9776;
        </span>
        <ul className={isMenuOpen ? styles.active : ""}>
          {sections.map((section) => (
            <React.Fragment key={section.id}>
              <li>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section.id); // Llamamos a la función que actualiza el estado
                  }}
                  className={
                    selectedSection === section.id ? styles.selected : ""
                  } // Establecemos el estilo si es la sección seleccionada
                >
                  {section.name}
                </a>
              </li>
              <hr className={styles.separator} />
            </React.Fragment>
          ))}
          <div className={styles.CV}>
            <DowlandCV />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
