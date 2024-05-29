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
                <Project image={"WarringNations.png"} title={"Warring Nations"} link={"https://github.com/truongmleon/Warring-Nations-MoreMathEdition"}/>
                </section>
            </section>
            </div>
        </article>
    )
}

export default Works;