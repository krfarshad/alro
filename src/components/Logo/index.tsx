import { Link } from "react-router-dom";
import LogoImage from "@/assets/images/logo.png";
const Logo = () => {
  return (
    <Link to="/">
      <img
        className="max-w-md max-h-10 h-auto block"
        src={LogoImage}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
