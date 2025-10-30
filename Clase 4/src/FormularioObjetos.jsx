// 3°
// una variable de estado con un objeto

import { useState } from "react";

function FormObjetos() {
    
    const [formulario, setFormulario] = useState({  // variable de estado Formulario es un objeto
        nombre: '',
        correo: ''
    });

    const manejarCambio = (e) => {
        setFormulario({
            ...formulario, // operador de propagacion o spread operator | Mantiene los valores existentes
            [e.target.name]: e.target.value // Actualizamos solo el campo que cambio
        });
    };

    // Ejecuta al enviar el formulario
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log('Datos enviados: ', formulario);

        // Limpia
        setFormulario({
            nombre: '',
            correo: ''
        });
    };

    return(
        <div id="tarjeta">
            <h5>useState con evento onSubmit con Objetos</h5>
            <h2>Formulario de Envio</h2>

            <form onSubmit={manejarEnvio}>
                <div>
                    <label>Nombre: </label>
                    <input 
                    type="text" 
                    name="nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                    placeholder="Escribe tu nombre"
                    />
                </div>

                <div>
                    <label>Correo: </label>
                    <input type="email" 
                    name="correo"
                    value={formulario.correo}
                    onChange={manejarCambio}
                    placeholder="Escribe tu correo"
                    />
                </div>
                <hr />
                <button type="submit">Enviar</button>
            </form>

            <div>
                <p>Nombre: {formulario.nombre || 'Anonimo'}</p>
                <p>Correo: {formulario.correo || 'No proporcionado'}</p>
            </div>
        </div>
    );
}
export default FormObjetos;