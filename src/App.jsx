import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CarDetail from './pages/CarDetail';
import CarList from './pages/Carlist';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import { useState } from 'react';

function App(){
  
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<CarList/>} />
          <Route path="/cars/:id" element={<CarDetail/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;