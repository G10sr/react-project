import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
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
                <Link to="/carrito">
                    <FontAwesomeIcon 
                    className={`btn ${location.pathname === "/carrito" ? "active" : ""}`} 
                    icon={faBasketShopping} 
                    />
                </Link>
            </div>
        </header>
    );
}

export default Header;

//contador del carrito en el header
{}