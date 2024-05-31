let active: boolean = false;

const baseLink = () => window.location.href = "/";

const hamburgerMenu = () => {
  active ? document.getElementById("hamburger")?.classList.add("active") : document.getElementById("hamburger")?.classList.remove("active");
  active ? document.getElementById("menu")!.style.display = "block" : document.getElementById("menu")!.style.display = "none";
  active = !active;
}

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul id="nav-list">
        <li><a className="nav" onClick={baseLink} href="/">Home</a></li>
        <li><a className="nav" href="works.html"> Works</a></li>
        <li><a className="nav" href="blog.html">&nbsp; Blog</a></li>
        <li><a className="nav" href="connect.html">Connect</a></li>
        </ul>
        <div id="hamburger" onClick={() => hamburgerMenu()}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </div>
        <div id="menu">
      </div>
      </nav>
    </div>
  )
}

export default Navbar;