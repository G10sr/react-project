import { animate , splitText, stagger } from 'animejs';
import { useEffect } from "react";

function AppearingText({style ,children}){

    useEffect(() => {
        const { words } = splitText('p', {
            words: { wrap: 'clip' },
        });

        animate(words, {
            y: [
                { to: ['100%', '0%'] },
            ],
            duration: 750,
            ease: 'out(3)',
            delay: stagger(100),
            loop: false,
        });

    }, []);
    return(
        <div class="large centered row">
            <p class="text-xl" id="welcomeText" 
            style={{
                fontSize:"2rem",
                marginInlineStart:"5vw",
                ... style
            }}>{...children}</p>
        </div>
    )
}

export default AppearingText;