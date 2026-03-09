import { animate , splitText, stagger } from 'animejs';
import { useEffect } from "react";

function AppearingText({ style, children, className }) {

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

    return (
        <div className="large centered row">
            <p 
                className={`text-xl ${className}`} 
                id="welcomeText" 
                style={{
                    fontSize: "2rem",
                    marginInlineStart: "5vw",
                    ...style
                }}
            >
                {children}
            </p>
        </div>
    );
}

export default AppearingText;