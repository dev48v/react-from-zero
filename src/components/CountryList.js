// ============================================================
// STEP 4 — CountryList Component
// STEP 5 — Added SearchBar with client-side filtering
// ============================================================
// Fetches all countries, then filters them locally by search text.
//
// Why filter on the client instead of calling the search API?
//   - We already have all 250 countries loaded
//   - Filtering in JS is instant — no network delay
//   - The search API has rate limits; local filtering doesn't
// ============================================================

import { useState, useEffect } from 'react';
import { getAllCountries } from '../services/countryApi';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
import './CountryList.css';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // New state for the search text
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getAllCountries();
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  // Filter countries by search text (case-insensitive)
  // .filter() creates a new array with only matching items
  // .includes() checks if the search text is found anywhere in the name
  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="country-list__message">Loading countries...</div>;
  if (error) return <div className="country-list__message">Error: {error}</div>;

  return (
    <>
      <div className="country-list__controls">
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <div className="country-list">
        {filtered.length === 0 ? (
          <div className="country-list__message">No countries found</div>
        ) : (
          filtered.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              onClick={() => console.log('Clicked:', country.name.common)}
            />
          ))
        )}
      </div>
    </>
  );
}

export default CountryList;
