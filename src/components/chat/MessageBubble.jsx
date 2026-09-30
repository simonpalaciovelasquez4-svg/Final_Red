export default function MessageBubble({ autor, hora, texto, mio }) {
  return (
    <div
      className={
        "w3-panel w3-round-large " +
        (mio
          ? "w3-rightbar w3-border-green w3-theme-l4 w3-right"
          : "w3-leftbar w3-border-blue w3-theme-l5")
      }
      style={{ maxWidth: "80%", clear: "both" }}
    >
      <p><strong>{autor}</strong> <span className="w3-opacity">{hora}</span></p>
      <p>{texto}</p>
    </div>
  );
}
