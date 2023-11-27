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
    <section id="registro" className="contenedorRegistrate">
      <h3>Turnos</h3>
      <h2>Llamanos o dejanos tu contacto</h2>
      <form onSubmit={manejarEnvio} className="formulario">
        <Campo
          label="Nombre"
          placeholder="Fulano"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        {/* <p className="campo1">Error! Debes completar este campo!</p> */}
        <Campo
          label="Apellido"
          placeholder="De Tal"
          required
          id="apellido"
          value={apellido}
          actualizarValor={setApellido}
        />
        {/* <p className="campo2">Error! Debes completar este campo!</p> */}
        <Campo
          type="email"
          label="Email"
          placeholder="fulanito@gmail.com"
          required
          id="email"
          value={email}
          actualizarValor={setEmail}
        />
        {/* <p className="campo3">Error! Debes completar este campo!</p> */}
        <Campo
          type="number"
          label="Teléfono"
          placeholder="11 0032 1024"
          required
          id="telefono"
          value={telefono}
          actualizarValor={setTelefono}
        />
        {/* <p className="campo4">Error! Debes completar este campo!</p> */}
        <Campo
          type="text"
          label="Asunto"
          placeholder="Ingrese Asunto"
          required
          id="asunto"
          value={asunto}
          actualizarValor={setAsunto}
        />
        {/* <p className="campo5">Error! Debes completar este campo!</p> */}

        <button className="itemBoton">Enviar</button>
      </form>
    </section>
  );
}
