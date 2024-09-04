import React, { useRef, useState } from "react";
import { init, sendForm } from "@emailjs/browser";
import styles from "../cssModules/Contact.module.css";

init("J2KD1AxhHThQjutM5");

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    mensaje: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendForm(
      "diaczukm@gmail.com",
      "template_gc2xg8c",
      formRef.current,
      "J2KD1AxhHThQjutM5"
    )
      .then((result) => {
        alert("¡Mensaje enviado con éxito!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error al enviar el mensaje.");
      });
  };

  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <label>
          From Name:
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
        <label>
          Message:
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
