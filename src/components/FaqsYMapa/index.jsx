export default function FaqsYMapa() {
  return (
    <section id="faq" className="contenedorPreguntas">
      <h3>Faqs</h3>
      <h2>Preguntas Frecuentes</h2>
      <div className="acordeon">
        <details>
          <summary>¿Cuáles son los horarios de atención al público?</summary>
          <ul className="contenidoDetails">
            <li>Lunes a Sábados 8:00 - 23:30 Hs.</li>
            <li>Domingos cerrado.</li>
            <li>Guardia 24 Hs.</li>
          </ul>
        </details>

        <details>
          <summary>¿Cuáles son las prestaciones con las que trabajan?</summary>
          <p className="contenidoDetails">
            Clínica Santo Viernes tiene relación con todas las prestadoras del
            país, además atendemos a particulares.
          </p>
        </details>

        <details>
          <summary>¿Cuáles son los datos de contacto?</summary>
          <ul className="contenidoDetails">
            <li>
              Atención telefónica de nuestro call center: +54 (341) 1023 4567
            </li>
            <li>
              <p className="ellipsis">
                A través de nuestro e-mail:{" "}
                <span title="turnos@clinicasantoviernes.com.ar">
                  turnos@clinicasantoviernes.com.ar
                </span>
              </p>
            </li>
            <li>
              A través de nuestras redes sociales: clinicaSV (Instagram,
              Facebook y Linkedln)
            </li>
          </ul>
        </details>

        <details>
          <summary>¿Qué especialidades atienden?</summary>
          <p className="contenidoDetails">
            Clínica Médica, Cardiología, Dermatología, Cirugía General,
            Ginecología, Neonatología, Neumonología, Oftalmología, Nutrición.
          </p>
        </details>
      </div>
    </section>
  );
}
