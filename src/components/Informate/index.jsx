import { FaHospital } from "react-icons/fa";
import { BsBandaid } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";

export default function Informate() {
  return (
    <section id="informate" className="contenedorInformate">
      <h3>Informate</h3>
      <h2>¿Por qué elegirnos?</h2>
      <div className="contenedorItemsInformate">
        <div className="itemsInformate">
          <FaHospital style={{ fontSize: "60px" }} />
          <p>
            Contamos con la tecnologia para su{" "}
            <span style={{ color: "#7d2a2a" }}>recuperación.</span>
          </p>
        </div>
        <div className="itemsInformate">
          <BsBandaid style={{ fontSize: "60px" }} />
          <p>
            Tu salud es lo más{" "}
            <span style={{ color: "#7d2a2a" }}>importante</span> para nosotros.
          </p>
        </div>
        <div className="itemsInformate">
          <FaUserDoctor style={{ fontSize: "60px" }} />
          <p>
            El personal mejor{" "}
            <span style={{ color: "#7d2a2a" }}>capacitado</span> a su
            disposicion.
          </p>
        </div>
      </div>
    </section>
  );
}
