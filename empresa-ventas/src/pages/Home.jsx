import { useState } from "react";
import AppearingText from "../components/AppearingText";
import "../assets/css/home.css";
import img1 from"../assets/img/arImg5.jpeg";
import Modal from "../components/Modal";


function Home() {
    
    const [text, setText] = useState({
        welcome: "Bienvenidos a Armonía",
        titulo1: "Que es Armonia?",
        titulo2: "Nuestros servicios",
        titulo3: "Nuestra misión",
        descripcion1: "...",
        descripcion2: "...",
        descripcion3: ""
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
            <section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.906126526111!2d-84.18237550844121!3d9.979382965347316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fbd8d8a8a637%3A0xa864c5b13e432605!2sArmon%C3%ADa%20Agricultura%20Org%C3%A1nica!5e0!3m2!1ses!2scr!4v1773110338462!5m2!1ses!2scr"
                    width="600"
                    height="450"
                    style={{ border: 0, 
                        borderRadius: "5px"
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
            </section>
        </div>
    );
}

export default Home;