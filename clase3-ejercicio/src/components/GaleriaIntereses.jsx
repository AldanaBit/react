function GaleriaIntereses() {
    
    function capturaClic(e) {
        e.target.style.backgroundColor = '#28a745';
        e.target.style.color = 'White';
    }
    
    return(
        <div className="galeria-intereses">
            {GaleriaIntereses.map((intereses) => (
                <button
                key={intereses}
                className="intereses-boton"
                onClick={capturaClic}
                > {intereses} </button>
            ))}
        </div>
    );
}
export default GaleriaIntereses;