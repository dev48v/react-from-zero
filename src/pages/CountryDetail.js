// ============================================================
// STEP 7 — CountryDetail Page
// ============================================================
// Full detail view for a single country.
// Uses React Router's useParams() to get the country code from the URL.
//
// Key concepts:
//   - useParams: extracts URL parameters (e.g., /country/IND → code="IND")
//   - useNavigate: programmatic navigation (back button)
//   - Conditional rendering: different UI for loading/error/data states
// ============================================================

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCountryByCode } from '../services/countryApi';
import './CountryDetail.css';

function CountryDetail() {
  const { code } = useParams();   // Get country code from URL
  const navigate = useNavigate();  // For the back button
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const data = await getCountryByCode(code);
        setCountry(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCountry();
  }, [code]); // Re-fetch if the code changes (e.g., clicking a border country)

  if (loading) return <div className="detail__message">Loading...</div>;
  if (error) return <div className="detail__message">Error: {error}</div>;
  if (!country) return <div className="detail__message">Country not found</div>;

  // Extract fields from the full API response
  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
    borders,
  } = country;

  // currencies is an object like { USD: { name: "US Dollar", symbol: "$" } }
  // Object.values() → [{ name: "US Dollar", symbol: "$" }]
  const currencyList = currencies
    ? Object.values(currencies).map((c) => c.name).join(', ')
    : 'N/A';

  // languages is an object like { eng: "English", hin: "Hindi" }
  const languageList = languages
    ? Object.values(languages).join(', ')
    : 'N/A';

  return (
    <div className="detail">
      <button className="detail__back" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="detail__content">
        <img
          className="detail__flag"
          src={flags.svg}
          alt={`Flag of ${name.common}`}
        />

        <div className="detail__info">
          <h2>{name.common}</h2>
          {/* Official name (e.g., "Republic of India" vs "India") */}
          <p className="detail__official">{name.official}</p>

          <div className="detail__facts">
            <div>
              <p><strong>Population:</strong> {population.toLocaleString()}</p>
              <p><strong>Region:</strong> {region}</p>
              <p><strong>Sub Region:</strong> {subregion || 'N/A'}</p>
              <p><strong>Capital:</strong> {capital ? capital.join(', ') : 'N/A'}</p>
            </div>
            <div>
              <p><strong>Currencies:</strong> {currencyList}</p>
              <p><strong>Languages:</strong> {languageList}</p>
            </div>
          </div>

          {/* Border countries — clicking navigates to that country's detail */}
          {borders && borders.length > 0 && (
            <div className="detail__borders">
              <strong>Border Countries: </strong>
              {borders.map((borderCode) => (
                <button
                  key={borderCode}
                  className="detail__border-btn"
                  onClick={() => navigate(`/country/${borderCode}`)}
                >
                  {borderCode}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
