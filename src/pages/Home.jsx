import { useState } from "react";
import AppearingText from "../components/AppearingText";
import "../assets/css/home.css";
import img1 from"../assets/img/arImg5.jpeg";
import Modal from "../components/Modal";
import ScrollVelocity from '../components/ScrollVelocity';
import CircularGallery from '../components/Carousel'




function Home() {
    
    const [text, setText] = useState({
        welcome: "Bienvenidos a Armonía",
        titulo1: "¿Qué es Armonía?",
        titulo2: "Nuestros servicios",
        titulo3: "Nuestra misión",
        descripcion1: "Armonía es un espacio pensado para promover el bienestar, el equilibrio y el crecimiento personal. Buscamos crear un ambiente donde las personas puedan encontrar tranquilidad, apoyo y herramientas que les ayuden a mejorar su calidad de vida.",
        descripcion2: "Ofrecemos una variedad de servicios diseñados para apoyar tu bienestar físico, mental y emocional. Entre ellos se incluyen asesorías, actividades de desarrollo personal, talleres y acompañamiento especializado.",
        descripcion3: "Nuestra misión es ayudar a las personas a alcanzar un estado de equilibrio y bienestar integral, brindando recursos, orientación y un entorno que fomente el crecimiento personal y una vida más consciente.",
        tituloMapa: "Donde encontrarnos:",
        valores: "Nuestros valores",
        valores1: "Calidad natural en cada bocado, compromiso con tu bienestar.",
        valores2: "Sabor auténtico, salud garantizada.",    });

    return (
        <div>
            <section className="banner">
                <img src={img1} alt="Foto1"/>
                <AppearingText key="welcome" className="text">
                {text.welcome}
                </AppearingText>            </section>
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
            <section className="section-valores">
                <AppearingText key="valores" className="text">
                {text.valores}
                </AppearingText>
                <ScrollVelocity
                texts={[text.valores1, text.valores2]} 
                velocity={50}
                className="custom-scroll-text"
                />
            </section>
            <section style={{height:"60vh"}}>
                <div style={{ height: '60vh', position: 'relative' }}>
                <CircularGallery 
                    textColor="#ffffff" 
                    borderRadius={0.05} 
                    scrollEase={0.07}
                    bend={1}
                    scrollSpeed={2.7}
                    />
                </div>
            </section>
            <section className="section-map">
                <p>{text.tituloMapa}</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.6841964948118!2d-84.17504236990727!3d9.97789012814426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb006d4fa4a5%3A0xbe651073ad3f1863!2sSoda%20Armon%C3%ADa!5e1!3m2!1ses!2scr!4v1774321539705!5m2!1ses!2scr"
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