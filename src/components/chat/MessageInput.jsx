import { useState } from "react";

export default function MessageInput({ onEnviar }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    onEnviar(texto);
    setTexto("");
  };

  return (
    <form className="w3-container w3-padding-16 w3-border-top" onSubmit={handleSubmit}>
      <div className="w3-row">
        <div className="w3-col s9">
          <input
            className="w3-input w3-border w3-round"
            type="text"
            placeholder="Escribe un mensaje..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
        </div>
        <div className="w3-col s3">
          <button className="w3-button w3-theme-d2 w3-round w3-block">
            <i className="fa fa-paper-plane"></i> Enviar
          </button>
        </div>
      </div>
    </form>
  );
}
