import "../styles/worksStyles/styles.css";
import Project from '../components/Project';

const Works = () => {
    return (
        <article className="flex">
            <section id="sections">
               <div id="pixel-animation">
                 <img id="flowers" src="/assets/flowers.png" alt="flowers i made" />
                 <img id="cat" src="/assets/icecat.png" alt="cat i made" />
               </div>
                <section data-aos="fade-right">
                    <h1 id="works-title">swe stuff</h1>
                    <h2 className="context"><b>Languages</b>: Java, Python, TypeScript, HTML/SCSS</h2>
                    <h2 className="context"><b>Libraries</b>: React, NumPy, Matplotlib</h2>
                    <h2 className="context"><b>Frameworks</b>: Node.js</h2>
                    <h2 className="context"><b>Tools</b>: Git, Bash, VS Code, Intellj</h2>
                </section>
                <section id="project-grid">
                    <Project 
                        image="wastenet.png" 
                        stack="React Native Expo, Flask, MongoDB, AWS Bedrock, Git" 
                        title="WasteNet" 
                        github="https://github.com/aryanballani/WasteNet-Mobile-App"
                        link="https://devpost.com/software/wastenet"
                        desc="A food management system to minimize food waste and energy 
                        consumption by scanning receipts of groceries, keeping 
                        track of what is expiring with AI. Features inventory tracking and 
                        recipe creation for each user."
                    />
                    <Project 
                        image="projectmicrowave.webp" 
                        stack="React, Pandas, Matplotlib, OpenBCI" 
                        title="Project Microwave" 
                        github="https://github.com/truongmleon/ProjectMicrowave"
                        link="https://faneeg.vercel.app/"
                        desc="An experiment to measure the effects of jumpscaring on brain waves using OpenBCI. 
                        The project includes a memory game (chimp test) with jumpscares. Volunteers wore an
                        EEG headset to record their brain activity while playing the game.
                        The data is then processed, visualized, and presented."
                    />
                    <Project 
                        image="studemon.png" 
                        stack="Python, Pygame, Figma, Aseprite, Git" 
                        title="Studémon" 
                        github="https://github.com/truongmleon/Studemon"
                        link="https://devpost.com/software/studemon-m1e9hw"
                        desc="A Pokémon-inspired game that helps students reinforce their learning 
                        through engaging gameplay. Players can catch, train, and battle Studémons 
                        while solving problems. The user creates problems in a flashcard system."
                    />
                    <Project 
                        image="WarringNations.webp" 
                        stack="JavaFX, React, FXML, SCSS, MathJax" 
                        title="Warring Nations" 
                        github="https://github.com/truongmleon/Warring-Nations-MoreMathEdition"
                        link="https://mathmaker.vercel.app/"
                        desc="A multiplayer strategy game where buffs are received when 
                        players solve a math problem. As the player gets more powerful,
                        more difficult problems are presented. Arithmetic, geometry, algebra, 
                        calculus, and AMC problems are included. Original idea to Samuel Do."
                    />
                </section>
            </section>
        </article>
    )
}

export default Works;