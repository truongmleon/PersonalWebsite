const Project = ({image, title, link} : {image: string, title: string, link: string}) => {
    return (
        <section className="project-box">
            <h3 className="project-title">{title}</h3>
            <img className="project" src={"/projects/default/" + image} alt={title} onClick={() => window.open(link, "_blank")} />
        </section>
    )
}

export default Project;