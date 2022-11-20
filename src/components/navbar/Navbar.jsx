import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <div className="nav-brand">
        <Link to="/" className="nav-brand-link">
                Archan RD
              </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/" className={props.home}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className={props.blog}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className={props.project}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" className={props.about}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
