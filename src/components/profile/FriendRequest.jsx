import { IMG } from "../../constants";

export default function FriendRequest({ nombre, avatar }) {
  return (
    <div className="w3-card w3-round w3-white w3-center">
      <div className="w3-container">
        <p>Solicitud de amistad</p>
        <img src={IMG + avatar} alt={nombre} style={{ width: "50%" }} /><br />
        <span>{nombre}</span>
        <div className="w3-row w3-opacity">
          <div className="w3-half">
            <button className="w3-button w3-block w3-green w3-section" title="Aceptar">
              <i className="fa fa-check"></i>
            </button>
          </div>
          <div className="w3-half">
            <button className="w3-button w3-block w3-red w3-section" title="Rechazar">
              <i className="fa fa-remove"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
