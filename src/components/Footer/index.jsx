export default function Footer() {
    return (
        <footer className="contFoot">
        <div className="subContFoot">
            <p>Terminos y Condiciones</p>
            <p>Contactanos</p>
            <div className="der">
                <a href=""><i className="bi bi-facebook" onclick="enlaceFacebook()"></i></a>
                <a href=""><i className="bi bi-linkedin" onclick="enlaceLinkedin()"></i></a>
            </div>
        </div>
        <div className="copyR">
            <p>2023 Todos los derechos Reservados</p>
        </div>
    </footer>
    );
  }