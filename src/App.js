import React from 'react'
import {BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './Pages/home/Home';
import Footer from "./Components/footer/Footer";

const App = () => {
  
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
           </Routes>
    </div>
  )
}

export default App
