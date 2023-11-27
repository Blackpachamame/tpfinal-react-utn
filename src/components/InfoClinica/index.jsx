export default function InfoClinica() {
  return (
    <section id="infoClinica" className="contenedorInfo">
      <div className="info">
        <i className="infoLogo bi bi-alarm-fill"></i>
        <div className="infoCarta">
          <h6>Horario</h6>
          <p>Lun-Sab: 08:00 - 23:30</p>
        </div>
      </div>
      <div className="info">
        <i className="infoLogo bi bi-telephone-fill"></i>
        <div className="infoCarta">
          <h6>Conmutador: 1023 - 4567</h6>
          <p>Call Center: 1023 - 4568</p>
        </div>
      </div>
      <div className="info">
        <i className="infoLogo bi bi-geo-alt-fill"></i>
        <div className="infoCarta">
          <h6>Ubicación</h6>
          <p>Pichincha 1890, C1245 CABA</p>
        </div>
      </div>
    </section>
  );
}
