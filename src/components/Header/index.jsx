import logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <header id="cabezera" className="header">
      <div className="containerNav">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <nav className="navbar">
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

      {/* <div className="containerHeaderResponsive">
        <div className="itemHeaderImg">
          <img className="imgH" src="img/logo.png" alt="" />
          <i className="las la-bars"></i>
        </div>

        <div className="itemsResponsiveContainer">
          <div className="itemHeaderR" id="quienes">
            <a href="#quienSomos" className="itemH">
              Quienes somos
            </a>
          </div>
          <div className="itemHeaderR" id="registrate">
            <a href="#registro" className="itemH">
              Turnos
            </a>
          </div>
          <div className="itemHeaderR" id="funciona">
            <a href="#BA" className="itemH">
              Infórmate
            </a>
          </div>
          <div className="itemHeaderR" id="faqs">
            <a href="#faq" className="itemH">
              FAQs
            </a>
          </div>
          <div className="itemLogin">
            <a href="">Ingresar</a>
          </div>
        </div>
      </div> */}
    </header>
  );
}
