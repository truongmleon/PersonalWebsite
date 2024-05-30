import Project from '../components/Project';

const Works = () => {
    return (
        <article className="flex">
            <section className="sections">
                <h2 className="section-title">Programming</h2>
                <h2 className="section-title">Projects</h2>
                <h3 className="context">I've used Python, C++, Java, SQL, JavaScript, TypeScript, React.js, HTML, and SCSS.
                    I feel proficient in React.js and Java, though.
                    I make designs that show me in my projects.
                </h3>
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