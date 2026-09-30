import { useState } from "react";
import { NavLink } from "react-router-dom";

const enlaces = [
  { to: "/", texto: "Inicio", icono: "fa-home", end: true },
  { to: "/perfil", texto: "Perfil", icono: "fa-user" },
  { to: "/chat", texto: "Mensajes", icono: "fa-envelope" },
  { to: "/grupos", texto: "Grupos", icono: "fa-group" },
  { to: "/configuracion", texto: "Configuración", icono: "fa-cogs" },
];

const cuenta = [
  { to: "/login", texto: "Iniciar sesión", icono: "fa-sign-in" },
  { to: "/registro", texto: "Registrarse", icono: "fa-user-plus" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const clase = ({ isActive }) =>
    "w3-bar-item w3-button w3-padding-large w3-hover-white" +
    (isActive ? " w3-theme-d4" : "");

  const todos = [...enlaces, ...cuenta];

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          <button
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <i className="fa fa-bars"></i>
          </button>

          {todos.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={(estado) => clase(estado) + " w3-hide-small"}
            >
              <i className={`fa ${l.icono}`}></i> {l.texto}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Menú para pantallas pequeñas */}
      <div
        className={
          "w3-bar-block w3-theme-d2 w3-large w3-hide-large w3-hide-medium " +
          (menuAbierto ? "w3-show" : "w3-hide")
        }
        style={{ position: "fixed", top: 46, left: 0, right: 0, zIndex: 3 }}
      >
        {todos.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={clase}
            onClick={() => setMenuAbierto(false)}
          >
            {l.texto}
          </NavLink>
        ))}
      </div>
    </>
  );
}
