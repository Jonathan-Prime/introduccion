
import "./App.css";
import Component from "./Component";
import React, { useEffect, useState } from "react";
import Formulario from"./Form"
import Logueo from './Login'


function App() {
  const [opcionesFooter, setOpcionesFooter] = useState({
    opcion1: "Inicio",
    opcion2: "Nosotros",
    opcion3: "Menu",
  });

  const [number, setNumber] = useState(0);
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    actualizar(number); 
  }, [number]);

  const actualizar = (num) => {
    console.log("Número recibido:", num);
    let incremet = 1;
    const resultado = incremet + num;
    setIncrement(resultado); // Actualiza el estado `increment`
  };

  const funcionbutton = (value) => {
    setOpcionesFooter({
      opcion1: "Boquis",
    opcion2: "No se baña",
    opcion3: "nunca",
    })
    
  };
  return (
    <div className="App">
      <div className="padre">

        <div className="hijo">
          <p>
            Hola 1

          </p>
          <p>
            Hola 2
            
          </p>
          <p>
            Hola 3
            
          </p>
        </div>

      </div>
      <nav className="navbar">
        <ul className="lists">
          <li className="options">Inicio</li>
          <li className="options">Nosotros</li>
          <li className="options">Menu</li>
        </ul>
      </nav>
      <Component footerOptions={opcionesFooter} numberSecond={increment} actualizar={actualizar} />
    

      <h1>Formulario de registro</h1>
      <Formulario />
      <br />
      <br />
      <h1>Formulario de login</h1>
      <Logueo />
      
    </div>
  );
}

export default App;
