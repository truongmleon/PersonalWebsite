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
            <img id="room" src={room} alt="A room in Blender 3D by me." width="600" />
            </div>
            <h1 id="name-eng">Leon Truong</h1>
            <h2 id="name-cn">張嘉俊</h2>
        </div>
    )
}

export default Home;