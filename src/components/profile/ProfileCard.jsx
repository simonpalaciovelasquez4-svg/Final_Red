import Avatar from "../common/Avatar";

// datos: [{ icono: "fa-home", texto: "Londres" }]
export default function ProfileCard({ titulo = "Mi perfil", avatar, datos, children }) {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        <h4 className="w3-center">{titulo}</h4>
        <p className="w3-center">
          <Avatar archivo={avatar} tamano={106} style={{ height: 106 }} />
        </p>
        <hr />
        {datos.map((d) => (
          <p key={d.texto}>
            <i className={`fa ${d.icono} fa-fw w3-margin-right w3-text-theme`}></i> {d.texto}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
}
