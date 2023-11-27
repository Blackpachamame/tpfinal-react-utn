import imgCarrusel1 from "../../assets/img/c1.jpg";
import imgCarrusel2 from "../../assets/img/c2.jpg";
import imgCarrusel3 from "../../assets/img/c3.jpg";

export default function About() {
  return (
    <section id="quienSomos">
      <div className="contenedorQuienes">
        <h3>¿Quienes somos?</h3>
        <h2>Conocenos</h2>
        <p className="itemQuienes">
          Somos un equipo de más de 1000 personas entre profesionales médicos,
          tecnicos comprometidos en brindar cada día una excelente atención,
          eficiencia y con un trato cálido y cordial.
        </p>
      </div>

      <div id="qsCarrusel">
        <div className="carousel">
          <img src={imgCarrusel1} />
          <img src={imgCarrusel2} />
          <img src={imgCarrusel3} />
        </div>
      </div>
    </section>
  );
}
