import "./articles.scss";
import postImage1 from "../../images/post1.jpg";
import postImage2 from "../../images/post2.jpg";
import Post1 from "../PostDetailed/Post1";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="articles">
      <h1 className="title">All Articles</h1>
      <div className="container">
        <div className="card">
          <Link to="/post1" className="heading-link">
            <h1 className="card-heading">
              I Tried 21 Flavors of Mountain <br />
              Dew For Some Reason.
            </h1>
          </Link>

          <img src={postImage1} alt="" className="card-image" />
          <p className="desc">
            Explaining why I embarked on a quest to consume as many different
            flavors of Mountain Dew as possible is not an easy task. Why am I
            voluntarily drinking a beverage whose ad campaigns seem to vaguely
            suggest sexual violence? Why am I forcing my kidneys to undergo the
            aging technique used in that Benjamin Button…
          </p>
          <Link to="/post1" className="keep-reading">
            KEEP READING &gt;
          </Link>
        </div>

        <div className="card">
          <Link to="/post2" className="heading-link">
            <h1 className="card-heading">Why Free Speech Isn’t An Excuse</h1>
          </Link>
          <img src={postImage2} alt="" className="card-image" />
          <p className="desc">
            Explaining why I embarked on a quest to consume as many different
            flavors of Mountain Dew as possible is not an easy task. Why am I
            voluntarily drinking a beverage whose ad campaigns seem to vaguely
            suggest sexual violence? Why am I forcing my kidneys to undergo the
            aging technique used in that Benjamin Button…
          </p>
          <Link to="/post2" className="keep-reading"> KEEP READING &gt; </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
