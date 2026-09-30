export default function PageContainer({ maxWidth = 1200, marginTop = 80, children }) {
  return (
    <div className="w3-container w3-content" style={{ maxWidth, marginTop }}>
      {children}
    </div>
  );
}
