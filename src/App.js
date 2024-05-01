import React from 'react'
import {BrowserRouter, Routes,Route } from "react-router-dom"
import Home from './Pages/home/Home';
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";

const App = () => {
  
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
