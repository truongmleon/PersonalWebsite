const baseLink = () => window.location.href = "/";

const Navbar = () => {
  return (
    <div className="">
      <nav>
        <ul id="nav-list">
        <li><a className="nav" onClick={baseLink} href="/">Home</a></li>
        <li><a className="nav" href="works.html"> Works</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;