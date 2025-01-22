import "./assets/component.css";
import React,{useState} from"react"
function Formulario() {
const [formData,setFormData] = useState ({
    name: "",
    email: "",
    password: "",
})
const isFormIncomplete =
    !formData.name || !formData.email || !formData.password;
   const handleSubmit= (event) => { 
event.preventDefault();

create({
    name: formData.name,
    email: formData.email,
    password: formData.password,
  });
    
   }
   async function create(blogPost) {
    try {
      // Create the URL
      const url = "https://server-dw5y.onrender.com/api/auth/register";
  
      // Create the headers
      const headers = {
        "Content-Type": "application/json",
      };
  
      // Create the POST body
      const body = JSON.stringify(
        blogPost)
        ;
  console.log (body)
      // Send the POST request
      const response = await fetch(url, { method: "POST", headers, body });
      console.log(response);
      alert("Success:");
      formData.email=""
      formData.name=""
      formData.password=""
      // Check the response status
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the JSON response
      const data = await response.json();
      
    } catch (error) {
      // Handle any errors
      alert("Error:");
    }
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
        <input onChange= {handleChange} type="text" name= "name" value={formData.name}/> 
        <label> correo </label>
        <input onChange= {handleChange} type="text" name= "email" value={formData.email}/>
        <label>contraseña </label>
        <input onChange= {handleChange} type="password" name= "password"value={formData.password}/>
        <button disabled={isFormIncomplete} type ="submit">Enviar</button> 
    </form>
);


}

export default Formulario;


