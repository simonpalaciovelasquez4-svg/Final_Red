export default function InterestTags({ intereses }) {
  return (
    <div className="w3-card w3-round w3-white w3-hide-small">
      <div className="w3-container">
        <p>Intereses</p>
        <p>
          {intereses.map((t, i) => (
            <span key={t} className={`w3-tag w3-small w3-theme-d${5 - (i % 5)}`}>{t} </span>
          ))}
        </p>
      </div>
    </div>
  );
}
