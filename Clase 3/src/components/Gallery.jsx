import React from "react";

function Gallery() {
    const images = [
        "https://picsum.photos/150?text=Imagen+1",
        "https://picsum.photos/160?text=Imagen+1",
        "https://picsum.photos/170?text=Imagen+1",
        "https://picsum.photos/180?text=Imagen+1",
        "https://picsum.photos/id/1/200/300?Imagen+1"
    ];

    return(
        <section style={{
            display: "flex", // usa flexbox para layout
            flexWrap: "wrap", // permite que las imagenes se ajusten a la pantalla
            gap: "10px", // espacio de 10px entre imagenes
            justifyContent: "center", // centra horizontalmente
            marginTop: "20px" // margen superior de 20px
        }}>

        {/* Mapeo del Array de imagenes
            Esto itera sobre cada elemento del array 'images'
            src = URL de la imagen (ej: "https://...")
            index = posicion en el array (0, 1, 2...)
        */}

        {images.map((src, index) =>(
            <img 
                key={index} // Identificador unico requerido por React
                src={src} // URL de la imagen (del array)
                alt={`Imagen ${index + 1}`} // Texto alternativo accesible
                style={{
                    width: "150px", // ancho fijo de 150px
                    height: "150px" // alto fijo de 150px
                }} 
                />
        ))}

        </section>
    );
}
export default Gallery;