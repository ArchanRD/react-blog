import "./navbar.scss"

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="nav-brand"><a href="" className="nav-brand-link">Archan RD</a></div>
        <div className="nav-items">
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Links</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Navbar