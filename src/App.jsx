import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import './styles/app.css'

const App = () => (
  <div className="parent">
    <Header />
    <Navbar />
    <div className="image" />
    <Menu />
  </div>
)

export default App
