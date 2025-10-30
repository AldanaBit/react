import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {AppProvider} from './context/AppContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
// import Recomendaciones from './pages/Recomendaciones'
import Carrito from './pages/Carrito'
// import Contacto from './pages/Contacto'
// import Resenas from './pages/Resenas'
import DetalleLibro from './pages/DetalleLibro'
// import RutaProtegida from './pages/RutaProtegida'
// import Pagar from './pages/Pagar'
// import IniciarSesion from './pages/IniciarSesion'
// import Error from './pages/Error'

import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <AppProvider>
      <Navbar/>
      <h1>prueba app + navbar + inicio</h1>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/catalogo/:id' element={<DetalleLibro/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
      </Routes>
      <Footer/>
      </AppProvider>
    </>
    
    // <Navbar />
    // <div>
    //   <Routes>
    //     <Route path='/' element={<Inicio />} />
    //     <Route path='/catalogo' element={<Catalogo />} />
    //     <Route path='/catalogo/:id' element={<DetalleLibro />} />
    //     <Route path='/recomendaciones' element={<Recomendaciones />} />
    //     <Route path='/carrito' element={<Carrito />} />
    //     <Route path='/contacto' element={<Contacto />} />
    //     <Route path='/resenas' element={<Resenas />} />
    //     <Route path='/iniciar-sesion' element={<IniciarSesion/>}/>
    //     <Route path='/pagar' element={ <RutaProtegida>
    //           <Pagar  />
    //         </RutaProtegida>
    //       }
    //     />
    //     <Route path='*' element={<Error />}/>
    //   </Routes>
    // </div>
    // <Footer />
    
      
  );
}

export default App;
