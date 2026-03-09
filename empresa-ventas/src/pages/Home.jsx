import { useState } from "react";
import AppearingText from "../components/AppearingText";
import "../assets/css/home.css";
import img1 from"../assets/img/arImg5.jpeg"
import Modal from "../components/modal";


function Home() {
    
    const [text, setText] = useState({
        welcome: "Bienvenidos a Armonía",
        titulo1: "Que es Armonia?",
        titulo2: "Nuestros servicios",
        titulo3: "Donde encontrarnos",
        descripcion1: "...",
        descripcion2: "...",
        descripcion3: "..."
    });

    return (
        <div>
            <section className="banner">
                <img src={img1} alt="Foto1"/>
                <AppearingText className="text">{text.welcome}</AppearingText>
            </section>
            <section className="section-txt">
                <Modal 
                itemName1={text.titulo1}
                itemName2={text.titulo2}
                itemName3={text.titulo3}
                itemDesc1={text.descripcion1} 
                itemDesc2={text.descripcion2} 
                itemDesc3={text.descripcion3} 
                ></Modal>
            </section>
        </div>
    );
}

export default Home;