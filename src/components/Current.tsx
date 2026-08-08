import "../styles/currentStyles/styles.css";

const Current = () => {
    return (
        <section data-aos="fade-right" id="current">
            <br/> 
            <div className="responsive-center">
                <img id="car" src="https://res.cloudinary.com/di3wnypeb/image/upload/v1751296253/car_p3jrgz.webp" alt="minato bro" />
            </div>
            <section id="current-section">
            <h3 id="current-stuff">things i'm working on</h3>
            <ul id="current-list">
                <li className="blurb-me">Building a video game / figure ecommerce business</li>
                <li className="blurb-me">Figuring out what <a href="https://myanimelist.net/mangalist/pieappleii">manga</a>  / visual novels to read next. 
                Currently reading: Fate/Stay Night</li>
                <li className="blurb-me">One <a href="https://leetcode.com/u/truongmleon" target="_blank">LeetCode</a> a day keeps the unemployment away (maybe)</li>
                <li className="blurb-me">Cooking and mealprepping for school, making sure I eat well</li>
                <li className="blurb-me">Going to the gym</li>
                <li className="blurb-me">Taking more photos :3</li>
                <li className="blurb-me">Making sure I hang out with my friends and taking opportunities with them, 
                    because our college lives are going to end at some point</li>
            </ul>
            </section>
        </section>
    )
}

export default Current;