import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Contact from './Component/Contact'
import Servicio from './Component/Services'
import SolarCalculator from './Component/SolarCalculator'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (

    <div>
      <Header />

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/contactanos' element={<Contact />} />
          <Route path='/servicios' element={<Servicio />} />
          <Route path='/precio-paneles' element={<SolarCalculator />} />

        </Routes>

      </BrowserRouter>


      <Footer />
    </div>

  )
}

export default App
