import PageContainer from "./PageContainer";

// Tarjeta con formulario para login y registro
export default function AuthCard({ titulo, maxWidth, onSubmit, children }) {
  return (
    <PageContainer maxWidth={maxWidth} marginTop={100}>
      <div className="w3-card-4 w3-round-xlarge w3-white">
        <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
          <h2 className="w3-center">{titulo}</h2>
        </div>
        <form className="w3-container w3-padding-24" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </PageContainer>
  );
}
