import Avatar from "../common/Avatar";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

export default function ChatWindow({ conversacion, mensajes, onEnviar }) {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container w3-padding-16 w3-theme-d2 w3-round-large">
        <h4>
          <Avatar archivo={conversacion.avatar} tamano={40} alt={conversacion.nombre} style={{ verticalAlign: "middle" }} />{" "}
          {conversacion.nombre} <span className="w3-opacity w3-medium"> · Activa ahora</span>
        </h4>
      </div>
      <div className="w3-container w3-padding-16" style={{ height: 400, overflowY: "scroll" }}>
        {mensajes.map((m) => (
          <MessageBubble key={m.id} {...m} />
        ))}
      </div>
      <MessageInput onEnviar={onEnviar} />
    </div>
  );
}
