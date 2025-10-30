import React from "react";
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

function Navbar() {
    
    const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

    return(
        <>
        <nav style={{backgroundColor: "#CA313F", color: "white", padding: "10px"}}>
            <div>


                <ul style={{listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0}}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/catalogo">Catálogo</Link></li>
                    <li><Link to="/recomendaciones">Recomendaciones</Link></li>
                    <li><Link to="/resenas">Reseñas</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/carrito">Carrito ({carrito.length})</Link></li>
                    {isAuthenticated ? (
                        <li>
                            <span>Hola, {usuario.nombre}</span>
                            <button onClick={cerrarSesion}>Salir</button>
                        </li>
                    ) : (
                        <li><Link to="/iniciar-sesion">Iniciar sesión</Link></li>
                    )}
                
                </ul>
            </div>
            
        </nav>
        </>
    )
}
export default Navbar;