import { Link } from "react-router-dom";
import PageContainer from "../components/common/PageContainer";

export default function NoEncontrada() {
  return (
    <PageContainer maxWidth={600} marginTop={100}>
      <div className="w3-center">
        <h2>Página no encontrada</h2>
        <p>La dirección que buscas no existe.</p>
        <Link to="/" className="w3-button w3-theme-d2 w3-round">Volver al inicio</Link>
      </div>
    </PageContainer>
  );
}
