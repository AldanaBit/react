import React from "react";
import { useNavigate } from "react-router-dom";
import {useAppContext} from "../context/AppContext";

function Carrito() {
    const {carrito, vaciarCarrito, eliminarDelCarrito, actualizarCantidad} = useAppContext();

    const navigate = useNavigate();

    const total = carrito.reduce((suma, producto) => suma + producto.precio * (producto.cantidad || 1), 0);

    if (carrito.length === 0) {
        return(
            <section style={{
                textAlign: "center",
                marginTop: "40px"
            }}>
                <h2>Tu carrito está vacío</h2>
                <button onClick={() => navigate("/catalogo")}>Ver catálogo</button>
            </section>
        );
    }

    return(
        <section style={{
            padding: "20px",
            textAlign: "center"
        }}>
            <h2>Carrito de compras</h2>
            <hr />
            {carrito.map((producto) => (
                <div key={producto.id} style={{marginBottom: "20px",}}>
                    <img src={producto.img} alt={producto.titulo} width="100" />
                    <h3>{producto.titulo}</h3>
                    <p>Precio unitario: ${producto.precio}</p>
                    <p>Cantidad: {" "}
                        <input type="number" 
                        min= "1"
                        value={producto.cantidad || 1}
                        onChange={(e) => actualizarCantidad(producto.id, Number(e.target.value))}
                        style={{width: "60px"}}
                        />
                    </p>

                    <p>Subtotal: ${(producto.precio * (producto.cantidad || 1)).toFixed(2)}</p>

                    <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                    <hr />
                </div>
            ))}

            <h3>Total: ${total.toFixed(2)}</h3>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px"
            }}>
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                <button onClick={() => navigate("/pagar")}>Ir a pagar</button>
            </div>
        </section>
    );
}
export default Carrito;