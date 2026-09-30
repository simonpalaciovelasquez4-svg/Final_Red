import Avatar from "../common/Avatar";

export default function ConversationList({ conversaciones, activaId, onSeleccionar, busqueda, onBuscar }) {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container w3-padding-16 w3-theme-d2">
        <h4><i className="fa fa-comments"></i> Conversaciones</h4>
        <div className="w3-section">
          <input
            className="w3-input w3-border w3-round"
            type="text"
            placeholder="Buscar mensajes..."
            value={busqueda}
            onChange={(e) => onBuscar(e.target.value)}
          />
        </div>
      </div>
      <ul className="w3-ul w3-hoverable">
        {conversaciones.map((c) => (
          <li
            key={c.id}
            className={"w3-padding-16" + (activaId === c.id ? " w3-theme-l4" : "")}
            style={{ cursor: "pointer" }}
            onClick={() => onSeleccionar(c)}
          >
            <Avatar archivo={c.avatar} tamano={50} alt={c.nombre} className="w3-left w3-circle w3-margin-right" />
            <span className="w3-large">{c.nombre}</span><br />
            <span className="w3-opacity">{c.ultimo}</span>
            <span className="w3-right w3-small w3-text-theme">{c.hora}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
