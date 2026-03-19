import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import logo1 from "../assets/img/arLogo.jpg";

function Header() {

    const location = useLocation();
    const [text, setText] = useState({
        alt: "Armonía Logo Foto",
        option1: "Home",
        option2: "Productos",
    });

    return (
        <header>
            <img src={logo1} alt={text.alt}/>
            <div id="button-Div">
                <Link to="/">
                    <button className={`btn ${location.pathname === "/" ? "active" : ""}`}>{text.option1}</button>
                </Link>
                <Link to="/productos">
                    <button className={`btn ${location.pathname === "/productos" ? "active" : ""}`}>{text.option2}</button>
                </Link>
            </div>
        </header>
    );
}
//estado del carrito
const [carrito, setCarrito] = useState([]);
//estado para mostrar el carrito
const [mostrarCarrito, setMostrarCarrito] = useState(false);
//cargar carrito desde el  backend
const cargarCarrito = async () => {
    fetch("http://localhost:3001/carrito")
    .then(res => res.json())
    .then(data => setCarrito(data))
    .catch(error => console.error("Error al cargar el carrito", error));
};

useEffect(() => {
    cargarCarrito();
}, []);
export default Header;

//contador del carrito en el header
{}