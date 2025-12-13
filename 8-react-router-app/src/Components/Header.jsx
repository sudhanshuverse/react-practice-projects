import { Link } from "react-router";
import logo from "/assets/logo.jpeg";

function Header() {
    return(
        <header>
            <nav>
                <div className="left">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="right">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;