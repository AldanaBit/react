
import ListaEquipo from './ListaEquipo';
import Header from "./components/Header";
import Nav from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import './estilos/estilo.css' //se vuelve global y aplica sobre los componentes


function App() {
  
  const equipo = [
    {id: 1, nombre: 'Silvia', tecnologia: 'Product Owner'},
    {id: 2, nombre: 'Luis', tecnologia: 'Diseñador UX UI'},
    {id: 3, nombre: 'Matias', tecnologia: 'Desarrollador'},
    {id: 4, nombre: 'Sabrina', tecnologia: 'Desarrolladora'}
  ];


  return(

    <>
    <h1>React</h1>
    <hr />
    <Header/>
    <Nav/>
    <Main/>
    <Gallery/>
    <ListaEquipo equipo= {equipo}/>
    </>
  );
}
export default App;
