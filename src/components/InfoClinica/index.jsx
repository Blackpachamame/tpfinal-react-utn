import logo from "../../assets/img/logo.png";

export default function InfoClinica() {
  return (
<section id="infoClinica">
            <div className="contenedorInfo">
                <i className="infoLogo bi bi-alarm-fill"></i>
                <div className="infoCarta">
                    <h1>Horario:</h1>
                    <h3>Lun-Sab: 08:00 - 23:30</h3>
                </div>
                <i className="infoLogo bi bi-telephone-fill"></i>
                <div className="infoCarta">
                    <h1>Conmutador: 1023 - 4567</h1>
                    <h3>Call Center: 1023 - 4568</h3>
                </div>
                <i className="infoLogo bi bi-geo-alt-fill"></i>
                <div className="infoCarta">
                    <h1>Ubicación:</h1>
                    <h3>Pichincha 1890, C1245 CABA</h3>
                </div>
            </div>
        </section>
  );
}
