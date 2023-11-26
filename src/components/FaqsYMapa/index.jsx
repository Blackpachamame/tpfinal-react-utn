import logo from "../../assets/img/flecha2.png";

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
								<img src="./img/flecha2.png" className="up" id="up1" width="10px" />
							</span>
						</button>
						<div className="respu" id="resp1">
							<ul>
								<li>Lunes a Sábados 8:00 - 23:30 Hs.</li>
								<li>Domingos cerrado.</li>
								<li>Guardia 24 Hs.</li>
							</ul>
						</div>
					</div></div></div></div>
    );
  }