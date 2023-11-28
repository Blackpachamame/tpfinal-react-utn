import { useState } from "react";
import logo from "../../assets/img/logo.png";
import { CgMenuRight } from "react-icons/cg";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header id="cabezera" className="header">
      <div className="containerNav">
        <figure>
          <img src={logo} alt="logo" width={154} height={40} />
        </figure>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <CgMenuRight style={{ fontSize: "40px" }} />
        </div>
        <nav className={`navbar ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="#quienSomos">Quienes somos</a>
            </li>
            <li>
              <a href="#registro">Turnos</a>
            </li>
            <li>
              <a href="#informate">Infórmate</a>
            </li>
            <li>
              <a href="#faq">FAQs</a>
            </li>
            <li>
              <a href="" className="itemBtn">
                Ingresar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
