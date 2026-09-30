import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/common/AuthCard";
import FormField from "../components/common/FormField";

export default function Registro() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthCard titulo="Crear cuenta" maxWidth={600} onSubmit={handleSubmit}>
      <FormField etiqueta="Nombre completo" icono="fa-user" type="text" placeholder="Juan Pérez" required />
      <FormField etiqueta="Correo electrónico" icono="fa-envelope" type="email" placeholder="tu@email.com" required />
      <FormField etiqueta="Contraseña" icono="fa-lock" type="password" placeholder="********" required />
      <FormField etiqueta="Fecha de nacimiento" icono="fa-calendar" type="date" defaultValue="1990-01-01" />
      <FormField as="select" etiqueta="Género" icono="fa-venus-mars" defaultValue="">
        <option value="" disabled>Selecciona</option>
        <option>Hombre</option>
        <option>Mujer</option>
        <option>Otro</option>
      </FormField>
      <div className="w3-section">
        <button className="w3-button w3-theme-d2 w3-round w3-block w3-section">
          <i className="fa fa-user-plus"></i> Registrarse
        </button>
      </div>
      <p className="w3-center">
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>.
      </p>
    </AuthCard>
  );
}
