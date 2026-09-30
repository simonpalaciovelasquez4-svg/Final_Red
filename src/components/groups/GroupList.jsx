import Avatar from "../common/Avatar";

// accion: { texto, clase, icono } -> botón de cada grupo
export default function GroupList({ titulo, icono, claseCabecera, grupos, accion, pie }) {
  return (
    <div className="w3-card w3-round w3-white">
      <div className={`w3-container w3-padding-16 ${claseCabecera}`}>
        <h3><i className={`fa ${icono}`}></i> {titulo}</h3>
      </div>
      <ul className="w3-ul">
        {grupos.map((g) => (
          <li className="w3-padding-16" key={g.id}>
            <Avatar
              archivo={g.avatar}
              tamano={50}
              alt={g.nombre}
              className="w3-left w3-circle w3-margin-right"
              style={{ height: 50, objectFit: "cover" }}
            />
            <span className="w3-large">{g.nombre}</span><br />
            <span className="w3-opacity">{g.info}</span>
            <button className={`w3-button w3-small w3-right w3-round ${accion.clase}`}>
              {accion.icono && <i className={`fa ${accion.icono}`}></i>} {accion.texto}
            </button>
          </li>
        ))}
      </ul>
      {pie}
    </div>
  );
}
