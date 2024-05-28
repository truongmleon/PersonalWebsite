import { images } from "./About";

const getImage = () => {
    const img: HTMLElement | null = document!.getElementById("games");
    const num: number = Math.floor(Math.random() * 32);
    img!.setAttribute("src", images[num]);
}

const About = () => {
    return (
        <div id="about">
            <br/> 
            <img id="games" onClick={() => getImage()} src="src/assets/switch/1.png" alt="Nintendo Switch and Game Boy made in Blender by me." />
            <h3 id="introduction">About me _(ツ)_/¯</h3>
            <p className="blurb-me">Hi, I’m Leon. I’m a self-taught web developer in React.js and hobbyist 3D modeler with Blender 3D. 
                I’m attending the University of Washington majoring in computer science. 
                Since the summer before my sophomore year of high school, I’ve been learning how to code to create whatever weird and impractical things I can think of. 
            </p>
            <p className="blurb-me">
                Outside of coding, I enjoy playing video games (Persona, MC, AC:NH), strategizing chess (challenge me!), and reading manga (view my favs). 
                I’m a hard listener for J-pop and sometimes K-pop from my friends (view playlists).
            </p>
            <p className="blurb-me">
                With so much learning when it comes to different types of technologies, I developed an intense passion for learning everything. 
                I have great friends who brought me to this point.
                You can learn and receive more insight about me in my blog :)).
            </p>
        </div>
    )
}

export default About;