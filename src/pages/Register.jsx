
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AuthPages.css";

function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const contrasena = watch("contrasena");

  const onSubmit = async (data) => {
    const { confirmarContrasena, ...usuario } = data;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("http://localhost/loginApi/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      const resultado = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(resultado.message || "Error al registrar el usuario");
      }

      navigate("/login", {
        state: { successMessage: "Tu cuenta se creó correctamente. Inicia sesión." },
      });
    } catch (error) {
      console.error("Error de conexión:", error);
      setSubmitError(
        error instanceof TypeError
          ? "No se pudo conectar con el servidor. Verifica que Apache y MySQL estén activos."
          : error.message || "No se pudo registrar el usuario."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="auth-page auth-page-register">
      <section className="auth-panel" aria-labelledby="register-title">
        <div className="auth-brand">
          <span className="auth-brand-icon" aria-hidden="true">
            <i className="fa fa-users" />
          </span>
          <span>Conecta con tu comunidad</span>
        </div>

        <div className="auth-heading">
          <p className="auth-eyebrow">EMPIEZA HOY</p>
          <h1 id="register-title">Crea tu cuenta</h1>
          <p>Únete y comparte momentos con tu comunidad.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="auth-field">
            <label htmlFor="register-nombre">Nombre</label>
            <div className={`auth-input-wrap${errors.nombre ? " has-error" : ""}`}>
              <i className="fa fa-user-o" aria-hidden="true" />
              <input
                {...register("nombre", {
                  required: "Escribe tu nombre.",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres.",
                  },
                })}
                id="register-nombre"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                aria-invalid={Boolean(errors.nombre)}
                aria-describedby={errors.nombre ? "register-nombre-error" : undefined}
              />
            </div>
            {errors.nombre && (
              <span className="auth-field-error" id="register-nombre-error">
                {errors.nombre.message}
              </span>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="register-correo">Correo electrónico</label>
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
                id="register-correo"
                type="email"
                autoComplete="email"
                placeholder="tu@correo.com"
                aria-invalid={Boolean(errors.correo)}
                aria-describedby={errors.correo ? "register-correo-error" : undefined}
              />
            </div>
            {errors.correo && (
              <span className="auth-field-error" id="register-correo-error">
                {errors.correo.message}
              </span>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="register-contrasena">Contraseña</label>
            <div
              className={`auth-input-wrap${errors.contrasena ? " has-error" : ""}`}
            >
              <i className="fa fa-lock" aria-hidden="true" />
              <input
                {...register("contrasena", {
                  required: "Escribe una contraseña.",
                  validate: (value) =>
                    value.length >= 6 ||
                    "Usa al menos 6 caracteres.",
                })}
                id="register-contrasena"
                type="password"
                autoComplete="new-password"
                placeholder="Mínimo 6 caracteres"
                aria-invalid={Boolean(errors.contrasena)}
                aria-describedby={
                  errors.contrasena ? "register-contrasena-error" : undefined
                }
              />
            </div>
            {errors.contrasena && (
              <span className="auth-field-error" id="register-contrasena-error">
                {errors.contrasena.message}
              </span>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="register-confirmar-contrasena">
              Confirmar contraseña
            </label>
            <div
              className={`auth-input-wrap${
                errors.confirmarContrasena ? " has-error" : ""
              }`}
            >
              <i className="fa fa-check-circle-o" aria-hidden="true" />
              <input
                {...register("confirmarContrasena", {
                  required: "Confirma tu contraseña.",
                  validate: (value) =>
                    value === contrasena || "Las contraseñas no coinciden.",
                })}
                id="register-confirmar-contrasena"
                type="password"
                autoComplete="new-password"
                placeholder="Repite tu contraseña"
                aria-invalid={Boolean(errors.confirmarContrasena)}
                aria-describedby={
                  errors.confirmarContrasena
                    ? "register-confirmar-error"
                    : undefined
                }
              />
            </div>
            {errors.confirmarContrasena && (
              <span className="auth-field-error" id="register-confirmar-error">
                  {errors.confirmarContrasena.message}
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
            {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
            {!isSubmitting && <i className="fa fa-arrow-right" aria-hidden="true" />}
          </button>
        </form>

        <p className="auth-switch">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </section>
      <aside className="auth-showcase" aria-label="Bienvenida a la comunidad">
        <div className="auth-showcase-content">
          <span className="auth-showcase-tag">TU COMUNIDAD TE ESPERA</span>
          <h2>Un espacio para compartir lo que te hace único.</h2>
          <p>Conoce personas, encuentra intereses en común y crea nuevas historias.</p>
          <div className="auth-showcase-mark" aria-hidden="true">
            <i className="fa fa-heart-o" />
          </div>
        </div>
      </aside>
    </main>
  );
}

export default Register;
