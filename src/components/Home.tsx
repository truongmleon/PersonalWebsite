// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
// const app = new Application(canvas);
// app.load('https://prod.spline.design/XhmGNazp8c-sqtzZ/scene.splinecode');

/* <video width="320" loop autoPlay muted playsInline>
<source src={world} type="video/mp4"/>
<source src={world_webm} type="video/webm"/>
<source src={world_ogg} type="video/ogg"/>
</video> */

import world from "/src/assets/world.mp4";
import world_webm from "/src/assets/world.webm";
import world_ogg from "/src/assets/world.ogg";
import room from "/src/assets/room.png";

const info = document.getElementById("info");

info?.addEventListener("click", () =>{
    window.open("https://www.youtube.com/watch?v=P5OpsyHhzwM");
});

const Home = () => {
    return (
        <div id="home">
            <br/> 
            <div className="flex">
            <img id="room" src={room} alt="" width="600" />
            </div>
        </div>
    )
}

export default Home;