import "./assets/component.css";
import React,{useState} from"react"
function Formulario() {
const [formData,setFormData] = useState ({
    nombre: "",
    cedula: "",
    email: "",
})
const isFormIncomplete =
    !formData.nombre || !formData.email || !formData.cedula;
   const handleSubmit= (event) => { 
event.preventDefault();
    alert(`Datos enviados:\nNombre: ${formData.nombre}\nCorreo: ${formData.email}\nCédula: ${formData.cedula}`);
   }


const handleChange= (event) => {
    const {name,value}=event.target
    setFormData({
        ...formData,
        [name] :value
    })
}


return ( 
    <form action="hola" onSubmit={handleSubmit}>
        <label>nombre </label>
        <input onChange= {handleChange} type="text" name= "nombre" value={formData.nombre}/> 
        <label>numero </label>
        <input onChange= {handleChange} type="number" name= "cedula" value={formData.cedula}/>
        <label>email </label>
        <input onChange= {handleChange} type="email" name= "email"value={formData.email}/>
        <button disabled={isFormIncomplete} type ="submit">Enviar</button> 
    </form>
);


}

export default Formulario;
