import { useState } from 'react';

const Home = () => {    
    const [name, setName] = useState('Leon Truong');
    
    return (
        <div id="home">
            <div className="flex">
                <img id="room" src="/assets/room.png" alt="A room in Blender 3D by me." width="600" />
            </div>
            <h1
                onMouseOut={() => setName("Leon Truong")}
                onMouseOver={() => setName("Truong Leon")}
                id="name-eng"
                style={{transform: name === "Leon Truong" ? 'scale(1)' : 'scale(1.1)'}}>
                {name}
            </h1>
            <h2 id="name-cn">張嘉俊</h2>
        </div>
    )
}

export default Home;