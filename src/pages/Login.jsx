import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AuthPages.css";

export default function Login({ onLogin }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("http://localhost/loginApi/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: data.correo,
          contrasena: data.contrasena,
        }),
      });

      const resultado = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(resultado.message || "Credenciales incorrectas");
      }

      if (typeof onLogin !== "function") {
        throw new Error("No se pudo iniciar la sesión en la aplicación.");
      }

      const { contrasena, password, ...usuario } = resultado;
      onLogin(usuario);
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setSubmitError(
        error instanceof TypeError
          ? "No se pudo conectar con el servidor. Verifica que Apache y MySQL estén activos."
          : error.message || "No se pudo iniciar sesión."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-panel" aria-labelledby="login-title">
        <div className="auth-brand">
          <span className="auth-brand-icon" aria-hidden="true">
            <i className="fa fa-users" />
          </span>
          <span>Conecta con tu comunidad</span>
        </div>

        <div className="auth-heading">
          <p className="auth-eyebrow">QUÉ BUENO VERTE</p>
          <h1 id="login-title">Inicia sesión</h1>
          <p>Continúa la conversación con las personas que te importan.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {location.state?.successMessage && (
            <p className="auth-alert auth-alert-success" role="status">
              <i className="fa fa-check-circle" aria-hidden="true" />
              {location.state.successMessage}
            </p>
          )}

          <div className="auth-field">
            <label htmlFor="login-correo">Correo electrónico</label>
            <div className={`auth-input-wrap${errors.correo ? " has-error" : ""}`}>
              <i className="fa fa-envelope-o" aria-hidden="true" />
              <input
                {...register("correo", {
                  required: "Escribe tu correo electrónico.",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Escribe un correo electrónico válido.",
                  },
                })}
                id="login-correo"
                type="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                aria-invalid={Boolean(errors.correo)}
                aria-describedby={errors.correo ? "login-correo-error" : undefined}
              />
            </div>
            {errors.correo && (
              <span className="auth-field-error" id="login-correo-error">
                {errors.correo.message}
              </span>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="login-contrasena">Contraseña</label>
            <div
              className={`auth-input-wrap${errors.contrasena ? " has-error" : ""}`}
            >
              <i className="fa fa-lock" aria-hidden="true" />
              <input
                {...register("contrasena", {
                  required: "Escribe tu contraseña.",
                })}
                id="login-contrasena"
                type="password"
                autoComplete="current-password"
                placeholder="Tu contraseña"
                aria-invalid={Boolean(errors.contrasena)}
                aria-describedby={
                  errors.contrasena ? "login-contrasena-error" : undefined
                }
              />
            </div>
            {errors.contrasena && (
              <span className="auth-field-error" id="login-contrasena-error">
                {errors.contrasena.message}
              </span>
            )}
          </div>

          {submitError && (
            <p className="auth-alert auth-alert-error" role="alert">
              <i className="fa fa-exclamation-circle" aria-hidden="true" />
              {submitError}
            </p>
          )}

          <button className="auth-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
            {!isSubmitting && <i className="fa fa-arrow-right" aria-hidden="true" />}
          </button>
        </form>

        <p className="auth-switch">
          ¿Aún no tienes cuenta? <Link to="/registro">Regístrate gratis</Link>
        </p>
      </section>
      <aside className="auth-showcase" aria-label="Bienvenida a la comunidad">
        <div className="auth-showcase-content">
          <span className="auth-showcase-tag">UN LUGAR PARA CONECTAR</span>
          <h2>Las mejores historias empiezan con una conexión.</h2>
          <p>Comparte momentos, descubre grupos y mantente cerca de tu comunidad.</p>
          <div className="auth-showcase-mark" aria-hidden="true">
            <i className="fa fa-comments" />
          </div>
        </div>
      </aside>
    </main>
  );
}