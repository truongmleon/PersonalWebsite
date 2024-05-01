let active: boolean = false;

const load = (id: string) => {
  id !== "home" ? window.location.href = id.replace(/\s+/g, '') + ".html" : window.location.href = "/";
}

const hamburgerMenu = () => {
  active ? document.getElementById("hamburger")?.classList.add("active") : document.getElementById("hamburger")?.classList.remove("active");
  active ? document.getElementById("menu")!.style.display = "block" : document.getElementById("menu")!.style.display = "none";
  active = !active;
}

const Navbar = () => {
  return (
    <div className="">
      <nav>
        <ul id="nav-list">
        <li><a className="nav" onClick={() => window.location.href = "/"} href="#about">About</a></li>
        <li><a className="nav" onClick={() => window.location.href = "/"} href="#works">Works</a></li>
        <li><a className="nav" onClick={() => window.location.href = "/"} href="#contact">Contact</a></li>
        <li><a className="nav" onClick={() => load("blog")}>Blog</a></li>
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
