import LogoImagen from "../assets/images/logos/EcoKidslogo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
     <img src={LogoImagen} alt="EcoKids Logo"style={{ height: '60px' }} />
    </Link>
  );
};

export default Logo;
