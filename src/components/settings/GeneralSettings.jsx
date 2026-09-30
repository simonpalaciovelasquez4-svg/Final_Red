import FormField from "../common/FormField";

export default function GeneralSettings() {
  return (
    <div className="w3-container w3-padding-24">
      <h4>Información personal</h4>
      <FormField etiqueta="Nombre" type="text" defaultValue="Juan Pérez" />
      <FormField etiqueta="Correo electrónico" type="email" defaultValue="juan@email.com" />
      <FormField as="textarea" etiqueta="Biografía" rows="3" defaultValue="Diseñador UI/UX. Amante del café." />
      <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-save"></i> Guardar cambios</button>
    </div>
  );
}
