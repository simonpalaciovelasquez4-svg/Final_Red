// Campo de formulario reutilizable: input, select o textarea.
// Uso: <FormField etiqueta="Correo" icono="fa-envelope" type="email" required />
//      <FormField as="select" etiqueta="Género"> <option>...</option> </FormField>
export default function FormField({ etiqueta, icono, as: Tag = "input", children, ...props }) {
  const clase =
    Tag === "select" ? "w3-select w3-border w3-round" : "w3-input w3-border w3-round";

  return (
    <div className="w3-section">
      <label>
        {icono && <i className={`fa ${icono}`}></i>} {etiqueta}
      </label>
      <Tag className={clase} {...props}>
        {children}
      </Tag>
    </div>
  );
}
