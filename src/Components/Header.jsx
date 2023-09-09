import { Link } from "react-router-dom";
import logoimg from "../Img/logo.png";
export const Header = () => {
  return (
    <header className="header">
      <Link className="icon" to={"/"}>
        <img src={logoimg} alt="" />
      </Link>
      <nav>
        <Link to={"/"}>Producto</Link>
        <Link to={"/"}>Favorito</Link>
      </nav>
    </header>
  );
};
