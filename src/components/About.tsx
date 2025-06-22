import "../styles/aboutStyles/styles.css";
import { useState } from "react";

const About = () => {
    const getImage = () => {
        const num: number = Math.floor(Math.random() * 33 + 1);
        setImage(`/switch/${num}.webp`);
    }

    const [image, setImage] = useState("/switch/1.webp");

    return (
        <section id="about">
            <br/> 
            <img id="games" onClick={() => getImage()} src={image} alt="Nintendo Switch and Game Boy made in Blender by me." />
            <h3 id="introduction">about m3 _(ツ)_/¯</h3>
            <p className="blurb-me">
                Wsg, I’m Leon. I’m currently a computer science sophomore at the University of Washington.
                I enjoy partaking in hackathons, building projects, and learning new technologies.
                I actually kind of like learning everything, technology or not. There's a 
                certain delight in collecting new skills and hobbies.
                I’m also a huge fan of Nintendo, and I like to play games in my free time.
            </p>
            <p className="blurb-me">
                I chose the path of the software engineer because I want to build stuff. My favorite video game of all 
                time is Minecraft. But I also consider strategizing the stuff I make, which make RPGs like Fire Emblem and
                Persona (3/5) some of the best (I also like a great story and music). Try clicking on the switch :3 
                There's some stuff back in 2020-2022. It feels so nostalgic thinking about it.
            </p>
            <p className="blurb-me">
                All I gotta say is life is good.
            <br />
            </p>
        </section>
    )
}

export default About;