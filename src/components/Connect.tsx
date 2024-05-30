const Connect = () => {
    return (
        <article className="flex">
            <br/>
            <section className="sections">
            <h2 className="section-title">Connect w/ me :3</h2> 
            <h3 className="context">
                Have a question? Wanna be friends?
            </h3>
            <section id="connections">
                <button className="profile" onClick={() => window.open("https://github.com/truongmleon", "_blank")}>GitHub</button>
                <button className="profile" onClick={() => window.open("https://www.instagram.com/leonmmtt/", "_blank")}>Instagram</button>
                <button className="profile" onClick={() => window.open("https://www.linkedin.com/in/truongmleon/", "_blank")}>LinkedIn</button>
            </section>
            </section>
        </article>
    )
}

export default Connect;