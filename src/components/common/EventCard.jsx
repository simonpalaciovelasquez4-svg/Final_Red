import { IMG } from "../../constants";

export default function EventCard({ encabezado, icono, imagen, nombre, hora }) {
  return (
    <div className="w3-card w3-round w3-white w3-center w3-padding-16">
      <p>
        {icono && <i className={`fa ${icono}`}></i>} {encabezado}
      </p>
      {imagen && <img src={IMG + imagen} alt={nombre} style={{ width: "100%" }} />}
      <p><strong>{nombre}</strong></p>
      <p>{hora}</p>
      <div className="w3-container">
        <button className="w3-button w3-block w3-theme-l4">Info</button>
      </div>
    </div>
  );
}
