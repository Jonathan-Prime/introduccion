import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";
import React, { useEffect, useState } from "react";
import Formulario from"./Form"

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          className="button"
          onClick={(value) => funcionbutton((value = "123"))}
        >
          Cambiar opiones de footer
        </button>

        <button
          className="button"
          onClick={(number) => actualizar(increment)}
        >
         Actualizar
        </button>
        <p>
          {increment}
        </p>
      </header>
      <Formulario />
      <Component footerOptions={opcionesFooter} numberSecond={increment} actualizar={actualizar} />
    </div>
  );
}

export default App;
