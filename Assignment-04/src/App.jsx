import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import CardDetailedView from './Components/CardDetailedView';
import Footer from './Components/Footer';
import CardWrapper from './Components/CardWrapper';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<CardWrapper/>}></Route>
          <Route path='/recipeDetails/:id' element={<CardDetailedView/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
