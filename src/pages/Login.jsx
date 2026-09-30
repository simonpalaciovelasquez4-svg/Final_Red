import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/common/AuthCard";
import FormField from "../components/common/FormField";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthCard titulo="Iniciar sesión" maxWidth={500} onSubmit={handleSubmit}>
      <FormField etiqueta="Correo electrónico" icono="fa-envelope" type="email" placeholder="tu@email.com" required />
      <FormField etiqueta="Contraseña" icono="fa-lock" type="password" placeholder="********" required />
      <div className="w3-section">
        <button className="w3-button w3-theme-d2 w3-round w3-block w3-section">
          <i className="fa fa-sign-in"></i> Acceder
        </button>
      </div>
      <p className="w3-center"><a href="#">¿Olvidaste tu contraseña?</a></p>
      <p className="w3-center">
        ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.
      </p>
    </AuthCard>
  );
}
