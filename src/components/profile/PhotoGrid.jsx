import { IMG } from "../../constants";

// columna: clase de W3.CSS para el ancho de cada foto (w3-half, w3-third)
export default function PhotoGrid({ fotos, columna = "w3-half" }) {
  return (
    <div className="w3-row-padding">
      {fotos.map((f, i) => (
        <div className={columna} key={i}>
          <img src={IMG + f} style={{ width: "100%" }} className="w3-margin-bottom" alt={f} />
        </div>
      ))}
    </div>
  );
}
