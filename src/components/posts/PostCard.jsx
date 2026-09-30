import Avatar from "../common/Avatar";
import { IMG } from "../../constants";

export default function PostCard({ nombre, tiempo, avatar, texto, imagenes = [] }) {
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <Avatar archivo={avatar} className="w3-left w3-circle w3-margin-right" />
      <span className="w3-right w3-opacity">{tiempo}</span>
      <h4>{nombre}</h4>
      <br />
      <hr className="w3-clear" />
      <p>{texto}</p>

      {imagenes.length > 0 && (
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          {imagenes.map((img, i) => (
            <div key={i} className={imagenes.length > 1 ? "w3-half" : "w3-col m12"}>
              <img src={IMG + img} style={{ width: "100%" }} alt={img} className="w3-margin-bottom" />
            </div>
          ))}
        </div>
      )}

      <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
        <i className="fa fa-thumbs-up"></i> Me gusta
      </button>{" "}
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
        <i className="fa fa-comment"></i> Comentar
      </button>
    </div>
  );
}
