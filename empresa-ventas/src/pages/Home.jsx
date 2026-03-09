import { useState } from "react";
import AppearingText from "../components/AppearingText";
import Button from "../components/CustomButton";

function Home() {
    const [text, setText] = useState({
        welcome: "Bienvenidos a Armonía",
    });

    return (
        <div>
            <AppearingText>{text.welcome}</AppearingText>
        </div>
    );
}

export default Home;