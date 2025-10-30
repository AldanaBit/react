import './App.css'
import { MiBoton } from './MiBoton'
import Tarjeta from './Tarjeta'
import ListaFrutas from './lista'

function App() {

  return (
    <>

    <h1 className="titulo">Comenzando con React</h1>
    <h2>Ejercicios Clase 2</h2>
        <h2>Lista de Frutas</h2>
        <ListaFrutas frutas={['Manzana','Banana','Cereza','Durazno']}/>

        <hr />
        <div>
            <Tarjeta
                titulo="Oferta especial"
                descripcion="20% de descuento en todos los productos"
                botonTexto= "Ver mas"
            />

            <Tarjeta
                titulo="Nuevo producto"
                descripcion="Descubre nuestra ultima innovacion"
                botonTexto= "Comprar ahora"
            />

            <Tarjeta
                titulo="Envio gratis"
                descripcion="En compras superiores a $50"
                botonTexto= "Aprovechar"
            />
        </div>
        <hr/>

        <h2>Botones personalizados</h2>
        <MiBoton texto="Aceptar" color="green"/>
        <MiBoton texto="Cancelar" color="red"/>
        <MiBoton texto="Mas informacion" color="blue"/>

    </>
  )

}

export default App

function Subtitulo() {

  return(
    <h2>Talento tech</h2>

  )

} export{Subtitulo}

function Boton() {

  return(
    <button onClick={() => alert("Hola Mundo")}>Click</button>
  )

}export {Boton}