import React from "react";
import CV3 from "../images/CV3.pdf";

const DownloadCV = () => {
  return (
    <a href={CV3} download>
      Descargar CV
    </a>
  );
};

export default DownloadCV;
