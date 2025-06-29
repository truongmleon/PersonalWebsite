import "../styles/homeStyles/styles.css";
import AOS from "aos";
import { useEffect } from "react";

const Home = () => {        
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id="home">
            <div className="flex">
                <img loading="lazy" id="room" src="/assets/room.jpg" alt="A room in Blender 3D by me." width="600" />
            </div>
            <div id="eng-wrapper">
            {"Leon".split('').map((char, index) => (
            <span style={{ '--name': index + 1 } as React.CSSProperties}>{char}</span>
            ))}
            <br />
            {"Truong".split('').map((char, index) => (
            <span style={{ '--name': index + 5 } as React.CSSProperties}>{char}</span>
            ))}
            </div>
            <div id="cn-wrapper">
            {"張嘉嘉".split('').map((char, index) => (
            <span style={{ '--name': index + 1 } as React.CSSProperties}>{char}</span>
            ))}
            </div>
        </section>
    )
}

export default Home;