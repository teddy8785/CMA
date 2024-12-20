import "../styles/components/header.css";
import logo from "../assets/logocma.webP";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo de c'etait mieux avant"
      />
    </header>
  );
}

export default Header;
