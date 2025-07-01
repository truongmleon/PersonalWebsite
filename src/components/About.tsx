import "../styles/aboutStyles/styles.css";
import { useState, useEffect } from "react";

const images: string[] = [
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295079/1_pgu3mo.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295083/7_akpq4p.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295083/26_izuggw.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295083/16_utgyaw.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295082/21_f5r2zg.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295081/17_vxz3ek.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295080/30_nx8bh0.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295080/31_diaioj.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295079/11_spawde.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295077/24_cfnbwi.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295077/32_v0ln05.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295077/2_rkt8m7.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295077/12_sehr7e.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295076/28_b9vf4p.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295073/29_jua5gs.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295073/13_dhqy75.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295073/25_xvyezm.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295073/33_fhtmrg.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295072/4_pzomij.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295071/14_q64fpw.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295070/20_ofdmcn.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295070/18_ceofzs.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295070/6_y6teh3.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295069/10_bbxtqk.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295066/3_wuqaby.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295066/23_updxa8.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295065/9_ajfpcw.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295064/19_qj58s1.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295063/5_z8nhgl.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295062/15_hjifsl.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295068/8_n7ylve.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295068/27_uw8ewy.webp",
    "https://res.cloudinary.com/di3wnypeb/image/upload/v1751295066/22_losv84.webp"
];

const preloadImages = () => {
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
};

const About = () => {
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);
    
    const [image, setImage] = useState(images[0]);

    const getImage = () => {
        const num: number = Math.floor(Math.random() * 32 + 1);
        setImage(images[num]);
    }

    return (
        <section data-aos="fade-left" className="about">
            <br/> 
            <img id="games" onClick={() => getImage()} src={image} alt="Nintendo Switch and Game Boy made in Blender by me." />
            <h3 className="introduction">about m3 _(ツ)_/¯</h3>
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