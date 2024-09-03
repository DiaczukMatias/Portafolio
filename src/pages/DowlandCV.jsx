import React from "react";
import CV2 from "../images/CV2.pdf";

const DownloadCV = () => {
  return (
    <a href={CV2} download>
      Descargar CV
    </a>
  );
};

export default DownloadCV;
