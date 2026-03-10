import { animate, splitText, stagger } from "animejs";
import { useEffect, useRef } from "react";

function AppearingText({ style, children, className }) {

    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        const { words } = splitText(textRef.current, {
                            words: { wrap: "clip" },
                        });

                        animate(words, {
                            y: [{ to: ["100%", "0%"] }],
                            duration: 750,
                            ease: "out(3)",
                            delay: stagger(100),
                        });

                        observer.unobserve(entry.target); 
                        // para que se ejecute solo una vez
                    }
                });
            },
            {
                threshold: 0.5 // cuando el 50% del elemento es visible
            }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect();

    }, [children]);

    return (
        <div className="large centered row">
            <p
                ref={textRef}
                className={`text-xl ${className}`}
                style={{
                    fontSize: "3rem",
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