import { useEffect, useRef } from "react";
import anime from "animejs";

function Home() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.innerHTML = "";

        for (let i = 0; i < 100; i++) {
            const dot = document.createElement("div");
            dot.classList.add("element");
            container.appendChild(dot);
        }

        const dots = container.querySelectorAll(".element");

        anime.set(dots, {
            scale: 0.75,
            opacity: 1,
            rotate: 0,
            translateY: 0,
            backgroundColor: "rgb(188,255,188)",
        });

        const timeline = anime.timeline({
            targets: dots,
            easing: "easeInOutExpo",
            delay: anime.stagger(80, {
                grid: [10, 10],
                from: "center",
            }),
            loop: true,
        });

        timeline
            .add({
                scale: [0, 1],
                opacity: [0, 1],
                duration: 800,
            })
            .add({
                translateY: [-10, 10],
                direction: "alternate",
                duration: 800,
            })
            .add({
                rotate: 180,
                duration: 700,
            })
            .add({
                backgroundColor: "#ff4d5a",
                scale: 0.8,
                duration: 600,
            })
            .add({
                scale: 0.75,
                rotate: 0,
                translateY: 0,
                backgroundColor: "rgb(188,255,188)",
                duration: 500,
            });

        return () => {
            anime.remove(dots);
        };
    }, []);

    return (
        <main>
            <div className="main-container">
                <div className="main-left">
                    <h1>Level Up Your <br /><span>Website Anime.js</span></h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sed ea autem nemo voluptatibus minima ullam.</p>
                    <button>Load More</button>
                </div>

                <div className="main-right">
                    <div className="main-right-card" ref={containerRef}></div>
                </div>
            </div>
        </main>
    );
}

export default Home;
