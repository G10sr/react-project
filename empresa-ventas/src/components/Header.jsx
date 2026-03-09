import React, { useState } from "react";
import "../assets/css/header.css";
import { Link } from "react-router-dom";


function Header(){
    const [text, setText] = useState({
        nombre: 'Armonía Foto',
        option1: 'Home',
        option2: 'Productos'
    });
    return(
        <header>
            <a>{text.nombre}</a>
            <div id="button-Div">
                <Link to={"/"}>
                    <button>{text.option1}</button>
                </Link>
                <Link to={"/productos"}>
                    <button>{text.option2}</button>
                </Link>
            </div>
            
        </header>
    );
}

export default Header;