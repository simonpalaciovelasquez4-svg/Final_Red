const opciones = [
  ["Recibir notificaciones por correo", true],
  ["Notificaciones de nuevos mensajes", true],
  ["Notificaciones de cumpleaños", false],
  ["Notificaciones de grupos", true],
];

export default function NotificationSettings() {
  return (
    <div className="w3-container w3-padding-24">
      <h4>Preferencias de notificaciones</h4>
      {opciones.map(([texto, marcado]) => (
        <div className="w3-section" key={texto}>
          <label>
            <input className="w3-check" type="checkbox" defaultChecked={marcado} /> {texto}
          </label>
        </div>
      ))}
      <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-bell"></i> Guardar preferencias</button>
    </div>
  );
}
