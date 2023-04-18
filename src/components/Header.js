import logo from "../assets/img/logo.png";
import Nav from "./Nav";
import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <Nav />
        </header>
    )
}

export default Header;