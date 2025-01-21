import "./assets/component.css";

function Formulario() {

   const handleSubmit= () => { 

    alert(`Datos enviados:\nNombre: ${formData.nombre}\nCorreo: ${formData.correo}\nCédula: ${formData.cedula}`);
   }





return ( 
    <form action="hola" onClick={handleSubmit()}>
        <label>nombre </label>
        <input type="text" name= "nombre"/> 
        <label>numero </label>
        <input type="number" name= "cedula"/>
        <label>email </label>
        <input type="email" name= "email"/>
        <button type ="submit">Enviar</button>
    </form>
);


}

export default Formulario;
