import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Footer from "./components/Footer";

function App(){
  return(
    <BrowserRouter>
    <Header></Header>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;