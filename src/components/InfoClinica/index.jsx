import { FaClock, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function InfoClinica() {
  return (
    <section id="infoClinica" className="contenedorInfo">
      <div className="info">
        <FaClock style={{ fontSize: "40px", color: "#5488d6" }} />
        <div className="infoCarta">
          <p className="infoCartaP">Horario</p>
          <p>Lun-Sab: 08:00 - 23:30</p>
        </div>
      </div>
      <div className="info">
        <FaPhone style={{ fontSize: "40px", color: "#5488d6" }} />
        <div className="infoCarta">
          <p className="infoCartaP">Conmutador: 1023 - 4567</p>
          <p>Call Center: 1023 - 4568</p>
        </div>
      </div>
      <div className="info">
        <FaLocationDot style={{ fontSize: "40px", color: "#5488d6" }} />
        <div className="infoCarta">
          <p className="infoCartaP">Ubicación</p>
          <p>Pichincha 1890, C1245 CABA</p>
        </div>
      </div>
    </section>
  );
}
