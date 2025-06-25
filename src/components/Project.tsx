import "../styles/worksStyles/styles.css";

const Project = ({image, title, desc, link} : {image: string, title: string, link: string, desc: string}) => {
    return (
        <section className="project-box">
            <h3 className="project-title">{title}</h3>
            <img className="project hidden" src={`/projects/hover/${image}`} alt={title} onClick={() => window.open(link, "_blank")} />
            <img className="project active" src={`/projects/default/${image}`} alt={title} onClick={() => window.open(link, "_blank")} />
        </section>
    )
}

export default Project;