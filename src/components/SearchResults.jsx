export default function SearchResults({ results, onSelectLocation }) {
  if (!results || results.length === 0) {
    return (
      <div className="search-results">
        <h2 className="results-title">Search Results</h2>
        <p>No results found. Try another search.</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2 className="results-title">Search Results</h2>
      {results.map((result) => (
        <div key={result.id} className="result-item" onClick={() => onSelectLocation(result)} tabIndex="0" role="button">
          <div className="result-icon">📍</div>
          <div className="result-info">
            <div className="result-location">{result.name}</div>
            <div className="result-country">{result.country}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
