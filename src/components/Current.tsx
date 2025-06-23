import "../styles/currentStyles/styles.css";

const Current = () => {
    return (
        <section id="current">
            <br/> 
            <img id="car" src="/assets/car.webp" alt="minato bro" />
            <section id="current-section">
            <h3 id="current-stuff">things i'm working on</h3>
            <ul id="current-list">
                <li className="blurb-me">Building a vintage <a href="" target="_blank">math book collection</a></li>
                <li className="blurb-me">Assembling <a href="" target="_blank">Gundam</a> (children)</li>
                <li className="blurb-me">Figuring out what <a href="https://myanimelist.net/mangalist/pieappleii">manga</a> to read next. 
                I just finished Evangelion 😋</li>
                <li className="blurb-me">Searching for whatever hackathons on <a href="https://devpost.com/truongmleon" target="_blank">Devpost</a></li>
                <li className="blurb-me">One <a href="https://leetcode.com/u/truongmleon" target="_blank">LeetCode</a> a day keeps the unemployment away (maybe)</li>
                <li className="blurb-me">Cooking and mealprepping for school, making sure I eat well</li>
                <li className="blurb-me">Cardistry. I like doing the hot shot cut & the sybil</li>
                <li className="blurb-me">Doing calisthenics @ 5:30am @ <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">my apartment</a> (push, pull, legs)</li>
                <li className="blurb-me">Replaying GTA V, continuing The Outer Worlds</li>
                <li className="blurb-me">Taking more photos</li>
            </ul>
            </section>
        </section>
    )
}

export default Current;