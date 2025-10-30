import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function DetalleLibro() {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {agregarAlCarrito} = useAppContext();
    const libro = state?.libro;

    if (!libro) {
        return(
            <section style={{
                textAlign: "center",
                padding: "20px"
            }}>
                <h2>No se pudo cargar la información del libro</h2>
                <Link to="/catalogo">
                    <button>Volver al Catálogo</button>
                </Link>
            </section>
        );
    }

    return(
        <section style={{
            textAlign: "center",
            padding: "20px"
        }}>
            <h1>{libro.titulo}</h1>
            <img src={libro.img} alt={libro.titulo} 
            style={{width: "250px", borderRadius: "8px", margin: "15px 0"}} />
            <p><strong>Autor:</strong>{libro.autor}</p>
            <p><strong>Idioma:</strong>{libro.idioma}</p>
            <p><strong>Categoría:</strong>{libro.categoria}</p>
            <p><strong>Precio:</strong>${libro.precio}</p>
            <p style={{maxWidth: "600px", margin: "0 auto"}}>
                <strong>Descripción:</strong>{libro.descripcion || "Sin descripción disponible"}
            </p>

            <div style={{marginTop: "20px"}}>
                <button onClick={() => agregarAlCarrito(libro)} style={{
                    marginRight: "10px",
                    padding: "8px 14px",
                    cursor: "pointer"
                }}>
                    Agregar al carrito
                </button>
                <Link to="/catalogo">
                    <button>Volver al Catálogo</button>
                </Link>
            </div>
        </section>
    );
}
export default DetalleLibro;