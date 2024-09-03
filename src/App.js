import React from "react";
import Home from "./pages/Home.jsx";
import Footer from "../src/components/footer.jsx";
import styles from "./cssModules/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
