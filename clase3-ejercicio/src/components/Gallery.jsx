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
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px"
        }}>
            {/* Mapeo del Array de imágenes
                // Esto itera sobre cada elemento del array 'images'
                // src = URL de la imagen (ej: "https://...")
                // index = posición en el array (0, 1, 2...)
            */}

            {images.map((src, index) => (
                <img 
                key={index}
                src={src} 
                alt={`Imagen ${index + 1}`} 
                style={{
                    width: "150px",
                    height: "150px"
                }}
                />
            ))}

        </section>
    );
}
export default Gallery;