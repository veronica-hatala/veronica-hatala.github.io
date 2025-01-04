import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp, FaSass, FaWordpress, FaReact } from "react-icons/fa";
import { Link } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="section hero-section">
            <div className="hero-section-left-box">
                <div className="hero-section-left"> 
                    <p className="hero-section-name">
                        Veronica Hatala
                    </p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                            Front End
                        </span>{" "}
                        <br />
                        Web Developer
                    </h1>
                    <p className="hero-section-description">
                        Software developer with 3+ years of experience
                    </p>
                </div>
                <div className="hero-section-button-box">
                    <Link
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Contact"
                        className="btn btn-primary"
                    >
                        Contact
                    </Link>
                    <a className="btn btn-primary" target="_blank" 
                    href="https://www.linkedin.com/in/veronica-hatala/overlay/1736004365061/single-media-viewer/?profileId=ACoAAC73l50BlHQDKPpMVoHPQNb6hXLcGSv45Qs">
                    Resume</a>    
                </div>
            </div>
            <div className="hero-section-right-box">
                <div className="hero-section-right"> 
                    <div className="hero-section-profile-pic">
                        <img src="./images/veronica-profile-pic.jpg" alt="Veronica's Picture" />
                    </div>
                    <div class="hero-section-stack-container">
                        <IoLogoJavascript />
                        <FaPhp />
                        <FaSass />
                        <FaWordpress />
                        <FaReact />
                    </div>
                </div>
            </div>
        </section>
    )
}