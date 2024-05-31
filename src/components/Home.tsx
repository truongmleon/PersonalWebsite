window.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        // Prevent default vertical scrolling
        event.preventDefault();
        // Scroll horizontally
        window.scrollBy({
            left: event.deltaY * 14, // Adjust the multiplier as needed
            behavior: 'smooth'
        });
    }
});

const Home = () => {
    return (
        <div id="home">
            <div className="flex">
                <img id="room" src="/assets/room.png" alt="A room in Blender 3D by me." width="600" />
            </div>
            <h1 id="name-eng">Leon Truong</h1>
            <h2 id="name-cn">張嘉俊</h2>
        </div>
    )
}

export default Home;