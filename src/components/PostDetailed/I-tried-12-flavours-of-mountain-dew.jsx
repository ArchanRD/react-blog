import "./post1.scss";
import Image1 from "../../images/post1.jpg"
import Navbar from "../navbar/Navbar"

const Post1 = () => {
  return (
    <>
    <Navbar />
    <div className="post">
      <h1 className="heading">
        I Tried 21 Flavors of Mountain Dew For Some Reason.
      </h1>
      <div className="img">
        <img src={Image1} alt="image" className="img-child" />
      </div>
      <p className="desc">
        Explaining why I embarked on a quest to consume as many different
        flavors of Mountain Dew as possible is not an easy task. Why am I
        voluntarily drinking a beverage whose ad campaigns seem to vaguely
        suggest sexual violence? Why am I forcing my kidneys to undergo the
        aging technique used in that Benjamin Button movie to make Brad Pitt
        look like a testicle? Why am I doing this twenty-one times?
      </p>
      <p className="desc">
        I’ve tried to find the logic in my actions, and as best I can tell, it’s
        this: sometimes, the world becomes a dark place, and you desperately
        need a distraction from all of it. Sometimes, you need to be reminded
        that your body is still yours, and that you can do with it what you
        want, no matter what anyone else says. Am I actually blaming my Mountain
        Dew escapades on the Supreme Court’s decision to overturn Roe v. Wade?
        No, of course not.
      </p>
      <p className="desc">
        But like, those fuckers didn’t help. I’m not normally compelled to drink
        Mountain Dew Overdrive, which professes to have “a bold, charged citrus
        punch” flavor, and has a bear that looks like it’s an anti-vaxxer on the
        label. I can only assume Kavanaugh is somewhat responsible.
      </p>
    </div>
    </>
  );
};

export default Post1;
