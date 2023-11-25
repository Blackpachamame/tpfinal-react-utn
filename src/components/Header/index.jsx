import logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <>
      <div id="cabezera" className="header">
        <div className="itemHeaderImg">
          <img src={logo} alt="" />
        </div>
        <div className="itemHeader" id="quienes">
          <a href="#quienSomos" className="itemH">
            Quienes somos
          </a>
        </div>
        <div className="itemHeader" id="registrate">
          <a href="#registro" className="itemH">
            Turnos
          </a>
        </div>
        <div className="itemHeader" id="funciona">
          <a href="#BA" className="itemH">
            Infórmate
          </a>
        </div>
        <div className="itemHeader" id="faqs">
          <a href="#faq" className="itemH">
            FAQs
          </a>
        </div>
        <div className="itemLogin">
          <a href="">Ingresar</a>
        </div>
      </div>

      <div className="containerHeaderResponsive">
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
      </div>
    </>
  );
}
