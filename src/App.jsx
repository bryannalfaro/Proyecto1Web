import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Duo from './components/Duo'
import Footer from './components/Footer'
import Alert from './components/Alert'
import Anuncio from './components/Anuncio'
import './styles/app.css'

const App = () => (
  <div className="parent">
    <Header />
    <Navbar />
    <div className="image" />
    <Menu foto={1} foto2={2} foto3={3} title="Pasteles" title2="Pastel de melocoton" title3="Tarta de frutas" title4="Mini pie de pollo" see="VER MÁS DE PASTELERÍA" />
    <Menu foto={4} foto2={5} foto3={6} title2="Pan de yemas" title3="Pan de loroco y queso crema" title4="Panitos de san antonio" title="Panaderia" see="VER MÁS DE PANADERÍA" />
    <Menu foto={7} foto2={8} foto3={9} title2="Ensalada santa fe del mar" title3="Pan con camarones" title4="Wrap santa fe del mar" title="Restaurante" see="VER MÁS DE RESTAURANTE" />
    <Menu foto={10} foto2={11} foto3={12} title2="Mocha 12 oz." title3="Hot cocoa 12 onzas" title4="2 café gran reserva" title="Cafe" see="VER MÁS DE CAFÉ" />
    <Duo />
    <Anuncio />
    <Alert />
    <Footer />

  </div>
)

export default App
