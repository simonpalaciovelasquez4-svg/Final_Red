import { useState } from "react";

// secciones: [{ id, titulo, icono, contenido }]
export default function Accordion({ secciones }) {
  const [abierto, setAbierto] = useState(null);

  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        {secciones.map((s) => (
          <div key={s.id}>
            <button
              onClick={() => setAbierto(abierto === s.id ? null : s.id)}
              className="w3-button w3-block w3-theme-l1 w3-left-align"
            >
              <i className={`fa ${s.icono} fa-fw w3-margin-right`}></i> {s.titulo}
            </button>
            <div className={"w3-container " + (abierto === s.id ? "w3-show" : "w3-hide")}>
              {s.contenido}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
