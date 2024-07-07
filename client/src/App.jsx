import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbaar'
import About from './components/About'
import Home from './components/Home'
import Clients from './components/Clients'
import Experience from './components/Experience'
import Business from './components/Business'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Home/>
      <Clients/>
      <Experience/>
      <Business/>
    </BrowserRouter>
  )
}
