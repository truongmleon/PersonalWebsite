import Project from '../components/Project';

const Works = () => {
    return (
        <article className="flex">
            <section className="sections">
               <div id="pixel-animation">
                 <img id="flowers" src="/assets/flowers.png" alt="flowers i made" />
                 <img id="cat" src="/assets/icecat.png" alt="cat i made" />
               </div>
                <h1 className="section-title">swe stuff</h1>
                <h2 className="context"><b>Languages</b>: Java, Python, TypeScript, HTML/SCSS</h2>
                <h2 className="context"><b>Libraries</b>: React, NumPy, Matplotlib</h2>
                <h2 className="context"><b>Frameworks</b>: Node.js</h2>
                <h2 className="context"><b>Tools</b>: Git, VS Code, Intellj</h2>
                <section id="project-grid">
                    <Project image={"WarringNations.webp"} desc={""} title={"Warring Nations Game"} link={"https://github.com/truongmleon/Warring-Nations-MoreMathEdition"}/>
                    <Project image={"Waves.webp"} desc={""} title={"AP Physics Video"} link={"https://github.com/truongmleon/Playground/tree/small-projects/AP%20Physics%201%3A%20Video%20Project"}/>
                    <Project image={"KeyClub.webp"} desc={""} title={"Key Club Website"} link={"https://github.com/truongmleon/Key-Club-Website"}/>
                </section>
            </section>
        </article>
    )
}

export default Works;