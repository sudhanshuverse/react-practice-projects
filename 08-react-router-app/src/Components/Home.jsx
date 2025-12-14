import { Link } from "react-router";
import heroImage from "/assets/hero-image.png";

function Home() {
    return (
        <main>
            <div className="hero-container">
                <div className="image-container">
                    <img src={heroImage} alt="hero image" />
                </div>
                <div className="text-container">
                    <h1>Hey, How are you.</h1>
                    <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world's most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuiltcomponents, and powerful JavaScript plugins.</p>
                </div>
                <div className="links">
                    <button><Link to="/about">Getting Started</Link></button>
                    <button><Link to="/contact">Contact Us</Link></button>
                </div>
            </div>
        </main>
    )
}

export default Home;