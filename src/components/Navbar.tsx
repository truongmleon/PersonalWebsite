let active: boolean = false;

const baseLink = () => window.location.href = "/";

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
        <li><a className="nav" onClick={baseLink} href="/">Home</a></li>
        <li><a className="nav" onClick={() => window.location.href = "works.html"}>Works</a></li>
        <li><a className="nav" onClick={() => window.location.href = "blog.html"}>Blog</a></li>
        <li><a className="nav" onClick={() => window.location.href = "contact.html"}>Contact</a></li>
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