import "../styles/worksStyles/styles.css";

const Project = ({image, id, title, link} : {image: string, id: string, title: string, link: string}) => {
    return (
        <section className="project-box">
            <h3 className="project-title">{title}</h3>
            <img id={`${id}-hover`} className="project hidden" src={`/projects/hover/${image}`} alt={title} onClick={() => window.open(link, "_blank")} />
            <img id={id} className="project active" src={`/projects/default/${image}`} alt={title} onClick={() => window.open(link, "_blank")} />
        </section>
    )
}

export default Project;