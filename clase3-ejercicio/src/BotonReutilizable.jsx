function BotonReutilizable({texto, color}) {
    
    const estilo ={
        backgroundColor: color,
        color: 'White',
        padding: '10px',
        border: 'none'
    };

    return(
        <button style={estilo}>{texto}</button>
    );
}
export {BotonReutilizable};