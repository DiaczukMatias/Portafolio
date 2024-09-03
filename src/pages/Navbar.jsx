import React from "react";
import styles from "../cssModules/Navbar.module.css";
import DownloadCV from "./DowlandCV";

const Navbar = ({ sections, handleRender }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <ul>
          {sections.map((section) => (
            <React.Fragment key={section.id}>
              <li>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRender(section.id);
                  }}
                >
                  {section.name}
                </a>
              </li>
              <hr className={styles.separator} />
            </React.Fragment>
          ))}
          <div className={styles.CV}>
            <DownloadCV />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
