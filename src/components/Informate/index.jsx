import recuperacion from "../../assets/img/8542025_hospital_building_icon.png";
import medicina from "../../assets/img/3678442_hospital_medicine_icon.png";
import hospital from "../../assets/img/5929124_doctor_healthcare_hospital_medical_medicine_icon.png";
export default function Informate() {
  return (
    <section id="informate" className="contenedorInformate">
      <h3>Informate</h3>
      <h2>¿Por qué elegirnos?</h2>
      <div className="contenedorItemsInformate">
        <div className="itemsInformate">
          <img src={recuperacion} alt="" className="iconito" />
          <p>
            Contamos con la tecnologia para su{" "}
            <span style={{ color: "#3172d2" }}>recuperación.</span>
          </p>
        </div>
        <div className="itemsInformate">
          <img src={medicina} alt="" className="iconito" />
          <p>
            Tu salud es lo más{" "}
            <span style={{ color: "#3172d2" }}>importante</span> para nosotros.
          </p>
        </div>
        <div className="itemsInformate">
          <img src={hospital} alt="" className="iconito" />
          <p>
            El personal mejor{" "}
            <span style={{ color: "#3172d2" }}>capacitado</span> a su
            disposicion.
          </p>
        </div>
      </div>
    </section>
  );
}
