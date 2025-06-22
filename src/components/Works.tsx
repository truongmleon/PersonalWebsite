import Project from '../components/Project';

const Works = () => {
    return (
        <article className="flex">
            <section className="sections">
                <img id="cat" src="/assets/icecat.png" alt="" />
                <h2 className="section-title">swe stuff</h2>
                <h3 className="context"><b>Languages</b>: Java, Python, TypeScript, HTML/SCSS</h3>
                <h3 className="context"><b>Libraries</b>: React, NumPy, Matplotlib</h3>
                <h3 className="context"><b>Frameworks</b>: Node.js</h3>
                <h3 className="context"><b>Tools</b>: Git, VS Code, Intellj</h3>
                <section id="project-grid">
                <Project image={"WarringNations.webp"} id="warring-nations" title={"Warring Nations Game"} link={"https://github.com/truongmleon/Warring-Nations-MoreMathEdition"}/>
                <Project image={"Waves.webp"} id="ap-physics" title={"AP Physics Video"} link={"https://github.com/truongmleon/Playground/tree/small-projects/AP%20Physics%201%3A%20Video%20Project"}/>
                <Project image={"KeyClub.webp"} id="key-club" title={"Key Club Website"} link={"https://github.com/truongmleon/Key-Club-Website"}/>
                </section>
            </section>
        </article>
    )
}

export default Works;