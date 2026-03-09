import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import Productos from "./pages/Productos";

function App(){
  return(
    <BrowserRouter>
    <Header></Header>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<Productos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;