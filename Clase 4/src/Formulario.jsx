// useState coon evento onSubmit

import { useState } from "react";

function FormularioEnvio() {
  const [nombre, setNombre] = useState(''); // variable de estado "nombre"
  const [correo, setCorreo] = useState('');

  // funcion que se ejecuta al enviar el formulario
  const manejarEnvio = (e) =>{
    e.preventDefault(); // evita que la pagina se recargue
    console.log('Datos enviados: ', {nombre, correo});

    // Limpiar los campos despues de enviar
    setNombre('');
    setCorreo('');
   };

  return(
    <div id="tarjeta">
        <h5>useState con evento onSubmit</h5>
        <h2>Formulario de Envio</h2>

        <form onSubmit={manejarEnvio}>
            <div>
                <label>Nombre: </label>
                <input 
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre"
                />
            </div>

            <div>
                <label>Correo: </label>
                <input 
                type="email" 
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Escribi tu correo"/>
            </div>

            <hr />
            <button type="submit">Enviar</button>
        </form>

        <div>
            <p>Nombre: {nombre || 'Anonimo'}</p>
            <p>Correo: {correo || 'No proporcionado'}</p>
        </div>

    </div>
  );
}
export default FormularioEnvio;

//1°
// una variable de estado

// import { useState } from "react";
// function Formulario() {
//   const [nombre, setNombre] = useState(''); // variable de estado "nombre"

//   const manejarCambio = (e) =>{
//     setNombre(e.target.value); // Actualiza el estado con el valor del input
//   };

//   return(
//     <div>
//         <input 
//         type="text" 
//         value={nombre}
//         onChange={manejarCambio}
//         placeholder="Escribe tu nombre"
//         />
//         <p>Hola, {nombre || 'Anonimo'}!</p>
//     </div>
//   );
// }
// export default Formulario; 