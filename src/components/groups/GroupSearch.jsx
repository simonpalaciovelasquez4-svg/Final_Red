export default function GroupSearch({ valor, onCambiar, onBuscar }) {
  return (
    <form
      className="w3-card w3-round w3-white"
      onSubmit={(e) => {
        e.preventDefault();
        onBuscar();
      }}
    >
      <div className="w3-container w3-padding-16">
        <h4>Buscar grupos</h4>
        <input
          className="w3-input w3-border w3-round"
          type="text"
          placeholder="Nombre del grupo..."
          value={valor}
          onChange={(e) => onCambiar(e.target.value)}
        />
        <button className="w3-button w3-theme-d2 w3-margin-top w3-round">
          <i className="fa fa-search"></i> Buscar
        </button>
      </div>
    </form>
  );
}
