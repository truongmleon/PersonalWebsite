import "../styles/homeStyles/styles.css";

const Home = () => {        
    return (
        <div id="home">
            <div className="flex">
                <img id="room" src="/assets/room.jpg" alt="A room in Blender 3D by me." width="600" />
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
        </div>
    )
}

export default Home;