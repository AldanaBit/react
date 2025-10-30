import { useState } from "react";

function EcommerceSimple() {
    
    // Lista de productos
    const listaProductos = [
        {id: 1, nombre: 'Camiseta', precio: 15.000},
        {id: 2, nombre: 'Pantalon', precio: 30.000},
        {id: 3, nombre: 'Zapatos', precio: 50.000},
    ];

    // Variable de estado carrito
    const [carrito, setCarrito] = useState([]);

    // Funcion agregar carrito
    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    // Funcion vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    // Retorno UI o grafico del componente
    return(
        <div id="tarjeta">
            <h3>Productos</h3>
            <ul>
                {listaProductos.map((producto) => (  // aplica metodo .map() sobre la lista "listaProductos" y el parametro "producto" es la variable de iteracion q recorre cada objeto de la lista
                    // usa producto.id como clave de identificacion unica del objeto
                    <li key={producto.id}> 
                        {producto.nombre}: ${producto.precio.toFixed(3)} {/* Muestra adentro de li el nombre del producto y el precio con (3) decimales */} 
                        <button onClick={() => agregarCarrito(producto)}>Agregar</button> {/* El boton "Agregar " contiene el llamado a la funcion "agregarCarrito" cuando se hace onClick sobre el q modifica la variable con setCarrito, agregando el producto del boton que se haga click */}
                    </li>
                ))}
            </ul>

            <h2>======================================================</h2>

            <h3>Carrito</h3>
            {carrito.map((producto) => ( // aplica .map() sobre la variable de estado para mostrar los productos fueron agregados
                <p key={producto.id}>
                    {producto.nombre}: ${producto.precio.toFixed(3)} 
                </p>
            ))}

            <button onClick={vaciarCarrito}>Eliminar</button> {/* Invoca a la funcion eliminar carrito q sobrescribe un array ([]) eliminando todo lo almacenado */}
        </div>
    );
}
export default EcommerceSimple;