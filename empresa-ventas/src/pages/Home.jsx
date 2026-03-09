import { useState } from "react";
import AppearingText from "../components/AppearingText";
import "../assets/css/home.css";
import img1 from"../assets/img/arImg5.jpeg"


function Home() {
    
    const [text, setText] = useState({
        welcome: "Bienvenidos a Armonía",
    });

    return (
        <div>
            <section className="banner">
                <img src={img1} alt="Foto1"/>
                <AppearingText className="text">{text.welcome}</AppearingText>
            </section>
        </div>
    );
}

export default Home;