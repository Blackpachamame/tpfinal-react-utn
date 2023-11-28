import Slider from "react-slick";
import imgCarrusel1 from "../../assets/img/c1.jpg";
import imgCarrusel2 from "../../assets/img/c2.jpg";
import imgCarrusel3 from "../../assets/img/c3.jpg";

export default function About() {
  const banners = [
    {
      id: 1,
      imgUrl: imgCarrusel1,
    },
    {
      id: 2,
      imgUrl: imgCarrusel2,
    },
    {
      id: 3,
      imgUrl: imgCarrusel3,
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

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

      <div id="qsCarrusel" className="carousel">
        <Slider {...settings}>
          {banners.map((item) => {
            return (
              <img
                src={item.imgUrl}
                key={item.id}
                width="100%"
                height="100%"
                alt=""
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
