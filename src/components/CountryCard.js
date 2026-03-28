// ============================================================
// STEP 3 — CountryCard Component
// ============================================================
// Displays a single country as a card with flag, name, and info.
//
// Why a separate component?
//   - Reusable: used once per country in the grid
//   - Single responsibility: only knows how to render ONE country
//   - Props: receives country data from parent, doesn't fetch its own
//
// Props:
//   - country: object from REST Countries API
//   - onClick: function called when the card is clicked
// ============================================================

import './CountryCard.css';

function CountryCard({ country, onClick }) {
  // Destructure the fields we need from the API response
  // country.name.common = "India" (the everyday name)
  // country.flags.svg  = URL to the SVG flag image
  // country.population = number like 1380004385
  // country.region     = "Asia", "Europe", etc.
  // country.capital    = ["New Delhi"] (array because some countries have multiple)
  const { name, flags, population, region, capital } = country;

  return (
    <div className="country-card" onClick={onClick}>
      {/* Flag image — using svg for crisp quality at any size */}
      <img
        className="country-card__flag"
        src={flags.svg}
        alt={`Flag of ${name.common}`}
      />

      <div className="country-card__info">
        <h3 className="country-card__name">{name.common}</h3>

        <p>
          <span className="country-card__label">Population: </span>
          {/* toLocaleString() adds commas: 1380004385 → "1,380,004,385" */}
          {population.toLocaleString()}
        </p>
        <p>
          <span className="country-card__label">Region: </span>
          {region}
        </p>
        <p>
          <span className="country-card__label">Capital: </span>
          {/* capital is an array — join with ", " for countries with multiple capitals */}
          {capital ? capital.join(', ') : 'N/A'}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
