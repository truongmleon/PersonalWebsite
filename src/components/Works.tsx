import Project from '../components/Project';

const Works = () => {
    return (
        <article>
            <br/>
            <div className="flex">
            <section id="projects">
                <h2 className="works-title">Programming</h2>
                <h2 className="works-title">Projects</h2>
                <h3 id="projects-blurb">I've used Python, C++, Java, SQL, JavaScript, TypeScript, React.js, HTML, and SCSS.
                    I feel proficient in React.js and Java, though.
                    I try to create good designs in my projects.
                </h3>
                <section id="project-grid">
                <Project image={"WarringNations.png"} id="warring-nations" title={"Warring Nations"} link={"https://github.com/truongmleon/Warring-Nations-MoreMathEdition"}/>
                <Project image={"Waves.png"} id="ap-physics" title={"AP Physics Video"} link={"https://github.com/truongmleon/Playground/tree/small-projects/AP%20Physics%201%3A%20Video%20Project"}/>
                <Project image={"KeyClub.png"} id="key-club" title={"Key Club Website"} link={"https://github.com/truongmleon/Key-Club-Website"}/>

                </section>
            </section>
            </div>
        </article>
    )
}

export default Works;