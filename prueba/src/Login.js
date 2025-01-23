/* TAREA: Enviar email y password en la peticion */

import "./assets/component.css";
import React, { useState } from "react";
import Usuarios from "./Usuarios";
function Formulario(getUsersAvailable) {
  /* estados de los datos o variables */
  const [formData, setFormData] = useState({
    email: "" /* variable de email iniciando vacio */,
    password: "" /* variable de password iniciando vacio  */,
  });

  /*  validacion de que el boton enviar esta deshabilitado cuando no se hayan llenado los campos */
  const isFormIncomplete = formData.email === "" || formData.password === "";

  /* evento que accion el boton de enviar cuando se active */
  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser({
      email: formData.email,
      password: formData.password,
    });
  };

  async function loginUser(userData) {
    /* userData son los datos que enviamos en el handlesubmit */
    /* hacemos intento */
    try {
      // Create the URL
      const url = "https://server-dw5y.onrender.com/api/auth/login";

      // Create the headers
      const headers = {
        "Content-Type": "application/json",
      };

      // Datos de la peticion
      const body = JSON.stringify(userData);

      // Enviamos los datos al servidos
      /* enviamos la url (La variable que asignamos en la linea 42), el tipo de metodo (POST),
      enviamos los headers (linea 45), y enviamos los datos del formulario (body) linea 50 */
      const response = await fetch(url, { method: "POST", headers, body });

      const data = await response.json();
      const token = data.token;

      // Guardar el token en localStorage
      localStorage.setItem("Authorization", `Bearer ${token}`);
      getUsersAvailable();
      alert("El usuario se ha logueado con exito");

      // Check the response status
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      // Handle any errors
      alert("Error de la peticion");
    }
  }

  /* cuando cambia el input (cuando ingresamos datos) */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form action="hola" onSubmit={handleSubmit}>
        <label> correo </label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={formData.email}
        />
        <label>contraseña </label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={formData.password}
        />
        <button disabled={isFormIncomplete === true} type="submit">
          Enviar
        </button>
      </form>
      <br />
      <br />
      <h1>Listar usuarios del proyecto</h1>
      <Usuarios />
    </>
  );
}

export default Formulario;
