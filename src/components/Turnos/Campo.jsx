import PropTypes from "prop-types";

const Campo = ({
  placeholder,
  label,
  required,
  valor,
  actualizarValor,
  type,
}) => {
  const tipo = type ? type : "text";
  const manejarCambio = (event) => {
    actualizarValor(event.target.value);
  };

  return (
    <div className="campo">
      <label htmlFor={label}>{label}</label>
      <input
        className="inputs"
        id={label}
        name={label}
        placeholder={placeholder}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type={tipo}
      />
    </div>
  );
};

export default Campo;

Campo.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  valor: PropTypes.string,
  actualizarValor: PropTypes.func,
  type: PropTypes.string,
};
