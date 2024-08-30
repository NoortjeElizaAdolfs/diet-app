import React, { useContext } from 'react';
import {Routes,Route } from "react-router-dom"
import Home from './Pages/home/Home';
import Footer from "../src/Components/footer/Footer";
import Header from "../src/Components/header/Header";
import Login from './Pages/account/Login';
import Logout from './Pages/account/Logout';
import Account from './Pages/account/Account';
import Register from './Pages/account/Register';
import NotFound from './Pages/not_found/Not-found';
import Recepten from './Pages/recepten/Recepten';
import { AuthContext } from './context/Auth';
import Inspiratie from './Pages/inspiratie/inspiratie';


const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account" element={user?.username ? <Account /> : <Login />} />
          <Route path="/recepten" element={user?.username ? <Recepten /> : <Login />} />
          <Route path="/inspiratie" element={user?.username ? <Inspiratie /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registreren" element={<Register />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
