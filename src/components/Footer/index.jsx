import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="contFoot">
      <div className="subContFoot">
        <ul>
          <li>Terminos y Condiciones</li>
          <li>Contactanos</li>
        </ul>
        <div className="redes">
          <a href="https://www.facebook.com/">
            <FaFacebookF style={{ fontSize: "16px", color: "#3d6eb8" }} />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedinIn style={{ fontSize: "16px", color: "#3d6eb8" }} />
          </a>
        </div>
      </div>
      <div className="copyR">
        <p>2023 © Todos los derechos Reservados</p>
      </div>
    </footer>
  );
}
