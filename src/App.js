import React from 'react'
import './CSS/App.css'
import Navbar from './Component/Navbar'
import { Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact'
import Footer from './Component/Footer';
import Product from './Pages/Product'
import Home from './Pages/Home'
import About from "./Pages/About"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/products' Component={Product} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;