export default function PostComposer({ titulo, textoInicial }) {
  return (
    <div className="w3-card w3-round w3-white w3-margin-bottom">
      <div className="w3-container w3-padding">
        <h6 className="w3-opacity">{titulo}</h6>
        <p contentEditable suppressContentEditableWarning className="w3-border w3-padding">
          {textoInicial}
        </p>
        <button type="button" className="w3-button w3-theme">
          <i className="fa fa-pencil"></i> Publicar
        </button>
      </div>
    </div>
  );
}
