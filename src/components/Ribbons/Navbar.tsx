const Navbar = () => {
  return (
    <div className="">
      <nav>
        <ul id="nav-list">
        <li><a className="nav" onClick={() => window.location.href = "."} href="/">Home</a></li>
        <li><a className="nav" href="projects.html">Projects</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;