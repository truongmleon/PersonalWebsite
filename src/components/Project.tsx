
import "../styles/worksStyles/styles.css";

const Project = (
    {image, title, stack, desc, github, link} : 
    {image: string, title: string, stack: string, link: string, github: string, desc: string}) => {
    
    return (
        <div data-aos="fade-right">
            <section className="project-box">
            <div className="project-content">
                    <h3 className="project-title"><a href={github} target="_blank">{title}</a> | {stack}</h3>
                    <p className="desc">{desc}</p>
                <div id="images">
                    <img loading="lazy" className="project hidden" src={`/projects/hover/${image}`} alt={title} onClick={() => window.open(link, "_blank")} />
                    <img loading="lazy" className="project active" src={`/projects/default/${image}`} alt={title} onClick={() => window.open(link, "_blank")} />
                </div>
            </div>
        </section>
        </div>
    )
}

export default Project;