import React, { useState } from "react";

function LanguageToggle() {
  const [language, setLanguage] = useState("es"); // 'es' para español, 'en' para inglés

  const handleToggle = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  return (
    <button onClick={handleToggle}>
      {language === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
    </button>
  );
}

export default LanguageToggle;
