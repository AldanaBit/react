import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Filtro from "../components/Filtro";

function Catalogo() {
    const [libros, setLibros] = useState([]);

    const [error, setError] = useState(null);

    const [cargando, setCargando] = useState(true);

    const {agregarAlCarrito} = useAppContext();

    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroIdioma, setFiltroIdioma] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [idiomas, setIdiomas] = useState([]);

    useEffect(() => {
        fetch("/productos.json").then((respuesta) => {
            if (!respuesta.ok) throw new Error("Error al cargar los libros");
            return respuesta.json();
        })
        .then((data) => {
            setLibros(data);
            setCategorias([...new Set(data.map((libro) => libro.categoria))]);
            setIdiomas([...new Set(data.map((libro) => libro.idioma))]);
            setCargando(false);
        })
        .catch((error) => {
            console.error(error);
            setError("No se pudieron cargar los libros");
            setCargando(false);
        });
    }, []);

    if (cargando) {
        return(
            <p>Cargando libros...</p>
        )   
    }

    if (error) {
        return(
            <p>{error}</p>
        )
    }

    const librosFiltrados = libros.filter((libro) => {
        return(
            (filtroCategoria ? libro.categoria === filtroCategoria : true) && (filtroIdioma ? libro.idioma === filtroIdioma : true)
        );
    });

    return(
        <section style={{textAlign:"center"}}>
            <h1>Catálogo de libros</h1>
            <Filtro
            categorias={categorias}
            idiomas={idiomas}
            filtroCategoria={filtroCategoria}
            filtroIdioma={filtroIdioma}
            setFiltroCategoria={setFiltroCategoria}
            setFiltroIdioma={setFiltroIdioma}
            />

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                padding: "20px"
            }}>
                {librosFiltrados.map((libro) => (
                    <div
                    key={libro.id}
                    style={{
                        border: "1px    solid   #ccc",
                        borderRadius: "8px",
                        padding: "10px",
                        background: "#fff"
                    }}>
                        <h3>{libro.titulo}</h3>
                        <p>{libro.autor}</p>
                        <img src={libro.img} alt={libro.titulo}
                        style={{width: "100%", borderRadius: "6px"}} />
                        <p><strong>${libro.precio}</strong></p>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "8px"
                        }}>
                            <Link to={`/catalogo/${libro.id}`} state={{libro}}>
                                <button>Ver detalle</button>
                            </Link>
                            <button onClick={() => agregarAlCarrito(libro)}>Agregar</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Catalogo;