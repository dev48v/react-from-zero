// ============================================================
// STEP 4 — CountryList Component
// STEP 5 — Added SearchBar with client-side filtering
// STEP 6 — Added RegionFilter dropdown
// ============================================================

import { useState, useEffect } from 'react';
import { getAllCountries } from '../services/countryApi';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';
import RegionFilter from './RegionFilter';
import './CountryList.css';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  // New state for region filter
  const [region, setRegion] = useState('');

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

  // Chain two filters: first by name, then by region
  // If region is "" (empty), the region filter passes everything through
  const filtered = countries
    .filter((c) => c.name.common.toLowerCase().includes(search.toLowerCase()))
    .filter((c) => (region ? c.region === region : true));

  if (loading) return <div className="country-list__message">Loading countries...</div>;
  if (error) return <div className="country-list__message">Error: {error}</div>;

  return (
    <>
      <div className="country-list__controls">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
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
