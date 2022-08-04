import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';
import './style.css';

export default function Navbar(){
    return(
        <>
            <div className="nav">
                <img src={Logo} alt='nav-logo' />
                <div className="nav-link">
                    <Link to ="/">Home</Link>
                    <Link to ="/">Our Service</Link>
                    <Link to ="/">Why Us</Link>
                    <Link to ="/">Testimonial</Link>
                    <Link to ="/">FAQ</Link>
                </div>
            </div>
        </>
    )
}