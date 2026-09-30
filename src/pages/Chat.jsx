import { useState } from "react";
import PageContainer from "../components/common/PageContainer";
import ConversationList from "../components/chat/ConversationList";
import ChatWindow from "../components/chat/ChatWindow";
import { conversaciones, mensajesIniciales } from "../data/conversaciones";

export default function Chat() {
  const [activa, setActiva] = useState(conversaciones[0]);
  const [mensajes, setMensajes] = useState(mensajesIniciales);
  const [busqueda, setBusqueda] = useState("");

  const lista = conversaciones.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const enviar = (texto) => {
    const hora = new Date().toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" });
    setMensajes([...mensajes, { id: Date.now(), autor: "Tú", hora, texto, mio: true }]);
  };

  return (
    <PageContainer maxWidth={1200}>
      <div className="w3-row">
        <div className="w3-col m4">
          <ConversationList
            conversaciones={lista}
            activaId={activa.id}
            onSeleccionar={setActiva}
            busqueda={busqueda}
            onBuscar={setBusqueda}
          />
        </div>
        <div className="w3-col m8">
          <ChatWindow conversacion={activa} mensajes={mensajes} onEnviar={enviar} />
        </div>
      </div>
    </PageContainer>
  );
}
