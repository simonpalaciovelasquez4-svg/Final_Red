import FormField from "../common/FormField";

export default function PrivacySettings() {
  return (
    <div className="w3-container w3-padding-24">
      <h4>Privacidad y seguridad</h4>
      <FormField as="select" etiqueta="¿Quién puede ver tu perfil?" defaultValue="Solo amigos">
        <option>Todos</option>
        <option>Solo amigos</option>
        <option>Solo yo</option>
      </FormField>
      <FormField as="select" etiqueta="¿Quién puede enviarte solicitudes de amistad?" defaultValue="Amigos de amigos">
        <option>Todos</option>
        <option>Amigos de amigos</option>
      </FormField>
      <FormField etiqueta="Cambiar contraseña" type="password" placeholder="Nueva contraseña" />
      <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-lock"></i> Actualizar privacidad</button>
    </div>
  );
}
