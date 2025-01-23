/* TAREA: Enviar email y password en la peticion */

import "./assets/Usuarios.css";
import React, { useEffect, useState } from "react";
function Usuarios() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Obtener el token del localStorage una sola vez
    const storedToken = localStorage.getItem("Authorization");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []); // Solo se ejecuta al montar el componente

  useEffect(() => {
    if (token) {
      getUsers(); // Llamar a la función para obtener usuarios solo si hay un token
    }
  }, [token]);

  /* tenemos que recibir el token del localstorage despues de loguearme  */

  async function getUsers() {
    try {
      const url = "https://server-dw5y.onrender.com/api/auth/getusers";
      const headers = {
        "Content-Type": "application/json",
        Authorization: token, // Usamos el token desde el estado
      };

      const response = await fetch(url, { method: "GET", headers });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);

      alert("Los usuarios han sido traídos con éxito");
    } catch (error) {
      console.error("Error de la petición:", error);
      alert("Error de la petición");
    }
  }

  console.log(users);
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="users">
            <p>Email: {user.email}</p>
            <p>Nombre: {user.name}</p>
          </div>
        ))
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
}

export default Usuarios;
