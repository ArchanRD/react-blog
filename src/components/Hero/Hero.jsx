import "./hero.scss"
import banner from "../../images/archanblogs_email_banner.png"

const Hero = () => {
  return (
    <div className="hero">
        <img src={banner} alt="header image" className="banner" />
        <h1 className="title">It's the perfect place for you to read fun and techy blogs</h1>
        <p className="moto">Just read once and you will visit again :&#41;</p>
        <div className="line"></div>
    </div>
  )
}

export default Hero