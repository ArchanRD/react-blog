import "./sidebar.scss";
import { Link } from "react-router-dom";
import Image1 from "../../images/post1.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="card-mini">
        <div className="img">
          <Link to="/">
            <img src={Image1} alt="image" className="card-img" />
          </Link>
        </div>
        <div className="card-title">
          <Link to="/" className="title-link">
            I Tried 21 Flavors of Mountain Dew For Some Reason.
          </Link>
        </div>
        <div className="show-more">
          <Link to="/" className="link">Show more &gt;</Link>
        </div>
      </div>
      <div className="card-mini">
        <div className="img">
          <Link to="/">
            <img src={Image1} alt="image" className="card-img" />
          </Link>
        </div>
        <div className="card-title">
          <Link to="/" className="title-link">
            I Tried 21 Flavors of Mountain Dew For Some Reason.
          </Link>
        </div>
        <div className="show-more">
          <Link to="/" className="link">Show more &gt;</Link>
        </div>
      </div>
      <div className="card-mini">
        <div className="img">
          <Link to="/">
            <img src={Image1} alt="image" className="card-img" />
          </Link>
        </div>
        <div className="card-title">
          <Link to="/" className="title-link">
            I Tried 21 Flavors of Mountain Dew For Some Reason.
          </Link>
        </div>
        <div className="show-more">
          <Link to="/" className="link">Show more &gt;</Link>
        </div>
      </div>
      <div className="card-mini">
        <div className="img">
          <Link to="/">
            <img src={Image1} alt="image" className="card-img" />
          </Link>
        </div>
        <div className="card-title">
          <Link to="/" className="title-link">
            I Tried 21 Flavors of Mountain Dew For Some Reason.
          </Link>
        </div>
        <div className="show-more">
          <Link to="/" className="link">Show more &gt;</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
