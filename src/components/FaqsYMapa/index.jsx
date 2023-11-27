export default function FaqsYMapa() {
  return (
    <section id="faq" className="contenedorPreguntas">
      <h4 className="itemPreguntas1">CONOCENOS</h4>
      <h2 className="itemPreguntas2">Preguntas Frecuentes</h2>
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
          <summary>
            ¿Cuáles son las prestaciones (pre-pagas, obras sociales, etc) con
            las que trabajan?
          </summary>
          <p className="contenidoDetails">
            Clínica Santo Viernes tiene relación con todas las prestadoras del
            país. Además atendemos a particulares.
          </p>
        </details>

        <details>
          <summary>¿Cuáles son los datos de contacto?</summary>
          <ul className="contenidoDetails">
            <li>
              Atención telefónica de nuestro call center: +54 (341) 1023 4567.
            </li>
            <li>
              A través de nuestro e-mail: turnos@clinicasantoviernes.com.ar
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
