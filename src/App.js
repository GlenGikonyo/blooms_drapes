import React from 'react'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Index from './pages/Index.jsx'
import Services from './pages/Services.jsx'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App