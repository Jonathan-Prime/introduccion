import logo from "./logo.svg";
import "./assets/component.css";

function Component({ footerOptions, numberSecond, actualizar }) {
  console.log(footerOptions);

  let increment2 = numberSecond;

  return (
    <footer className="footer">
      {Object.values(footerOptions).map((opcion, index) => {
        console.log(index); // Registra el índice en la consola
        return <li key={index}>{opcion}</li>;
      })}
      <button className="button" onClick={() => actualizar(increment2)}>
        Actualizar en otro componente
      </button>
    </footer>
  );
}

export default Component;
