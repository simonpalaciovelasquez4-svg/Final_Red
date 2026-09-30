export default function Tabs({ pestanas, activa, onCambiar }) {
  return (
    <div className="w3-bar w3-theme-l4">
      {pestanas.map((p) => (
        <button
          key={p}
          className={"w3-bar-item w3-button" + (activa === p ? " w3-theme-d1" : "")}
          onClick={() => onCambiar(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
