function Filtro({categorias, idiomas, filtroCategoria, filtroIdioma, setFiltroCategoria, setFiltroIdioma}) {
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "20px",
            flexWrap: "wrap"
        }}>
            <div>
                <label htmlFor="categoria">Categoría:</label>
                <select 
                id="categoria" 
                value={filtroCategoria} 
                onChange={(e) => setFiltroCategoria(e.target.value)}>
                    <option value="">Todas</option>
                    {categorias.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="idioma">Idioma:</label>
                    <select 
                    id="idioma"
                    value={filtroIdioma}
                    onChange={(e) => setFiltroIdioma(e.target.value)}>
                        <option value="">Todos</option>
                        {idiomas.map((idioma) => (
                            <option key={idioma} value={idioma}>{idioma}</option>
                        ))}
                    </select>
            </div>
        </div>
    );
}
export default Filtro;