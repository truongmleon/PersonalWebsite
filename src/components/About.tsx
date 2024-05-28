import image1 from "/src/assets/switch/1.png";
import image2 from "/src/assets/switch/2.png";
import image3 from "/src/assets/switch/3.png";
import image4 from "/src/assets/switch/4.png";
import image5 from "/src/assets/switch/5.png";
import image6 from "/src/assets/switch/6.png";
import image7 from "/src/assets/switch/7.png";
import image8 from "/src/assets/switch/8.png";
import image9 from "/src/assets/switch/9.png";
import image10 from "/src/assets/switch/10.png";
import image11 from "/src/assets/switch/11.png";
import image12 from "/src/assets/switch/12.png";
import image13 from "/src/assets/switch/13.png";
import image14 from "/src/assets/switch/14.png";
import image15 from "/src/assets/switch/15.png";
import image16 from "/src/assets/switch/16.png";
import image17 from "/src/assets/switch/17.png";
import image18 from "/src/assets/switch/18.png";
import image19 from "/src/assets/switch/19.png";
import image20 from "/src/assets/switch/20.png";
import image21 from "/src/assets/switch/21.png";
import image22 from "/src/assets/switch/22.png";
import image23 from "/src/assets/switch/23.png";
import image24 from "/src/assets/switch/24.png";
import image25 from "/src/assets/switch/25.png";
import image26 from "/src/assets/switch/26.png";
import image27 from "/src/assets/switch/27.png";
import image28 from "/src/assets/switch/28.png";
import image29 from "/src/assets/switch/29.png";
import image30 from "/src/assets/switch/30.png";
import image31 from "/src/assets/switch/31.png";
import image32 from "/src/assets/switch/32.png";
import image33 from "/src/assets/switch/33.png";

 const switchImages = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
    image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
    image31, image32, image33
];

const getImage = () => {
    const img: HTMLElement | null = document!.getElementById("games");
    const num: number = Math.floor(Math.random() * 32);
    img!.setAttribute("src",switchImages[num]);
    console.log(1);
}

const About = () => {
    return (
        <div id="about">
            <br/> 
            <img id="games" onClick={() => getImage()} src={switchImages[0]} alt="Nintendo Switch and Game Boy made in Blender by me." />
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