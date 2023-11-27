export default function Turnos() {
    return (
        <div id="registro" className="contenedorRegistrate">
        <div className="itemRegistrate1">TURNOS</div>
        <div className="itemRegistrate2">¿Turnos? Llamá o dejanos tu contacto</div>
        <div className="contenedorInputs">
            <input
                type="text"
                className="itemRegistrate inputs"
                placeholder="Nombre*"
                id="nombre"
            />
            <p className="campo1">Error! Debes completar este campo!</p>
            <input
                type="text"
                className="itemRegistrate inputs"
                placeholder="Apellido*"
                id="apellido"
            />
            <p className="campo2">Error! Debes completar este campo!</p>
            <input
                type="email"
                className="itemRegistrate inputs"
                placeholder="Email*"
                id="email"
            />
            <p className="campo3">Error! Debes completar este campo!</p>
            <input
                type="number"
                className="itemRegistrate inputs"
                placeholder="Teléfono*"
                id="telefono"
            />
            <p className="campo4">Error! Debes completar este campo!</p>
            <input
                type="text"
                className="itemRegistrate inputs"
                placeholder="Asunto*"
                id="asunto"
            />
            <p className="campo5">Error! Debes completar este campo!</p>

            <button className="itemBoton" onclick="return enviarDatos()">
                <a href="" className="boton">Enviar</a>
            </button>
        </div>
    </div>
    )
}