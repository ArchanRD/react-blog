import "./post1.scss";
import Image2 from "../../images/post2.jpg";
import Navbar from "../navbar/Navbar";

const Post1 = () => {
  return (
    <>
      <Navbar />
      <div className="post">
        <h1 className="heading">Why Free Speech Isn’t An Excuse</h1>
        <div className="img">
          <img src={Image2} alt="image" className="img-child" />
        </div>
        <p className="desc">
          As my online persona has grown over the last decade and a half, so has
          the volume of hate I have received. I have received letters at my
          home, had politicians come for me, and received every threat you can
          imagine, including one individual who told me that I was “too ugly to
          rape.” (Please, tell me, what is the corollary to this statement?)
        </p>
        <p className="desc">
          After the Batali piece came out, my Twitter account was hacked, and I
          decided I needed to approach the issue from the distance of academic
          detachment, lest it overwhelm me entirely. I started researching the
          nature of online hate. I poured through academic journals. I tried
          talking to some of the people who sent me hateful comments (something
          I don’t recommend). I cried in my car a few times at the sheer terror
          of engaging with people who said they wanted me dead. I asked one guy
          why he bothered following me, and he replied that he needed to
          remember “that people like me existed.” Even though, in his opinion, I
          shouldn’t.
        </p>
        <p className="desc">
          I ended up giving several talks on the subject of online abuse, the
          ways people try to defend it, and what we can do to combat it. One of
          the main excuses for why toxic speech should be allowed on social
          media platforms is that the company allowing it is trying to preserve
          “free speech”.
        </p>
      </div>
    </>
  );
};

export default Post1;
