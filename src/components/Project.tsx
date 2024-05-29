const Project = ({image, title} : {image: string, title: string}) => {
    return (
        <div>
            <img className="project" src={image} alt={title} />
        </div>
    )
}

export default Project;