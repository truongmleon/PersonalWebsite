const Project = ({image, title, link} : {image: string, title: string, link: string}) => {
    return (
        <section>
            <h3>{title}</h3>
            <img className="project" src={"/projects/default/" + image} alt={title} onClick={() => window.open(link, "_blank")} />
        </section>
    )
}

export default Project;