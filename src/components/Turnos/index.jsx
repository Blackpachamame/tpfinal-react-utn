import { useState } from "react";
import Campo from "./Campo";

export default function Turnos() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    let datosAEnviar = {
      nombre,
      apellido,
      email,
      telefono,
      asunto,
    };
    console.log(datosAEnviar);
  };

  return (
    <div id="registro" className="contenedorRegistrate">
      <div className="itemRegistrate1">TURNOS</div>
      <div className="itemRegistrate2">
        ¿Turnos? Llamá o dejanos tu contacto
      </div>
      <form onSubmit={manejarEnvio} className="formulario">
        <Campo
          label="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        {/* <p className="campo1">Error! Debes completar este campo!</p> */}
        <Campo
          label="Apellido"
          placeholder="Apellido*"
          required
          id="apellido"
          value={apellido}
          actualizarValor={setApellido}
        />
        {/* <p className="campo2">Error! Debes completar este campo!</p> */}
        <Campo
          type="email"
          label="Email"
          placeholder="Email"
          required
          id="email"
          value={email}
          actualizarValor={setEmail}
        />
        {/* <p className="campo3">Error! Debes completar este campo!</p> */}
        <Campo
          type="number"
          label="Teléfono"
          placeholder="Teléfono"
          required
          id="telefono"
          value={telefono}
          actualizarValor={setTelefono}
        />
        {/* <p className="campo4">Error! Debes completar este campo!</p> */}
        <Campo
          type="text"
          label="Asunto"
          placeholder="Asunto"
          required
          id="asunto"
          value={asunto}
          actualizarValor={setAsunto}
        />
        {/* <p className="campo5">Error! Debes completar este campo!</p> */}

        <button className="itemBoton">Enviar</button>
      </form>
    </div>
  );
}
