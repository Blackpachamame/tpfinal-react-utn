import flecha2 from "../../assets/img/flecha2.png";

export default function FaqsYMapa() {
  return (
    <div className="contenedorFaqsYMapa">
      <div id="faq" className="contenedorPreguntas">
        <div className="itemPreguntas1">CONOCENOS</div>
        <div className="itemPreguntas2">Preguntas Frecuentes</div>
        <div className="acordeon">
          <div className="acordeon-item">
            <button className="botonpreg" id="botonpreg1">
              <span> ¿Cuáles son los horarios de atención al público? </span>
              <span className="icon">
                <img src={flecha2} className="up" id="up1" width="10px" />
              </span>
            </button>
            <div className="respu" id="resp1">
              <ul>
                <li>Lunes a Sábados 8:00 - 23:30 Hs.</li>
                <li>Domingos cerrado.</li>
                <li>Guardia 24 Hs.</li>
              </ul>
            </div>
          </div>
          <div className="acordeon-item">
            <button className="botonpreg" id="botonpreg2">
              <span>
                ¿Cuáles son las prestaciones (pre-pagas, obras sociales, etc)
                con las que trabajan?
              </span>
              <span className="icon">
                <img src={flecha2} className="up" id="up2" width="10px" />
              </span>
            </button>
            <div className="respu" id="resp2">
              <p>
                Clínica Santo Viernes tiene relación con todas las prestadoras
                del país. Además atendemos a particulares.
              </p>
            </div>
          </div>
          <div className="acordeon-item">
            <button className="botonpreg" id="botonpreg3">
              <span> ¿Cuáles son los horarios de atención al público? </span>
              <span className="icon">
                <img src={flecha2} className="up" id="up2" width="10px" />
              </span>
            </button>
            <div className="respu" id="resp3">
              <ul>
                <li>
                  Atención telefónica de nuestro call center: +54 (341) 1023
                  4567.
                </li>
                <li>
                  A través de nuestro e-mail: turnos@clinicasantoviernes.com.ar
                </li>
                <li>
                  A través de nuestras redes sociales: clinicaSV (Instagram,
                  Facebook y Linkedln)
                </li>
              </ul>
            </div>
          </div>
          <div className="acordeon-item">
            <button className="botonpreg" id="botonpreg4">
              <span> ¿Qué especialidades atienden? </span>
              <span className="icon">
                <img src={flecha2} className="up" id="up4" width="10px" />
              </span>
            </button>
            <div className="respu" id="resp4">
              <p>
                Clínica Médica, Cardiología, Dermatología, Cirugía General,
                Ginecología, Neonatología, Neumonología, Oftalmología,
                Nutrición.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
