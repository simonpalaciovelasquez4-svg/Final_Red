import { IMG } from "../../constants";

// archivo: nombre de la imagen dentro de w3images (ej. "avatar2.png")
export default function Avatar({ archivo, tamano = 60, alt = "Avatar", className = "w3-circle", style }) {
  return (
    <img
      src={IMG + archivo}
      alt={alt}
      className={className}
      style={{ width: tamano, ...style }}
    />
  );
}
