import React from "react";
import styles from "../cssModules/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles["footer-content"]}>
          <p>&copy; {new Date().getFullYear()} Matias Diaczuk</p>
          <div className={styles["social-icons"]}>
            <a
              href="https://twitter.com/tunombre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/tunombre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
