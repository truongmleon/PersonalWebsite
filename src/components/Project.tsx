const hoverActive = (id: string) => {
    const defaultImage = document.getElementById(id);
    const hoveredImage = document.getElementById(`${id}-hovered`);
    hoveredImage!.style.opacity = "0";
    return "";
}

const Project = ({image, title, link, id} : {image: string, id: string, title: string, link: string}) => {
    return (
        <section className="project-box">
            <h3 className="project-title">{title}</h3>
            <img id={id} className="project" src={`/projects/default/${image}`} alt={title} onClick={() => window.open(link, "_blank")} />
            <img id={`${id}-hover`} className="project" src={`/projects/hover/${image}`} alt={title} onClick={() => window.open(link, "_blank")} />
        </section>
    )
}

export default Project;