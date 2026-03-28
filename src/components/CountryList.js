// ============================================================
// STEP 4 — CountryList Component
// ============================================================
// Renders a grid of CountryCard components.
// Fetches all countries on mount using useEffect + useState.
//
// Key React concepts:
//   - useState: stores the countries array in component state
//   - useEffect: runs the API call once when the component mounts
//   - Conditional rendering: shows "Loading..." while fetching
//   - key prop: React needs a unique key for each item in a list
// ============================================================

import { useState, useEffect } from 'react';
import { getAllCountries } from '../services/countryApi';
import CountryCard from './CountryCard';
import './CountryList.css';

function CountryList() {
  // State: array of countries from the API
  const [countries, setCountries] = useState([]);
  // State: true while the API call is in progress
  const [loading, setLoading] = useState(true);
  // State: error message if the API call fails
  const [error, setError] = useState(null);

  // useEffect with [] runs ONCE when the component first renders
  // This is where we fetch data — not in the render function
  useEffect(() => {
    async function fetchCountries() {
      try {
        const data = await getAllCountries();
        // Sort alphabetically by common name
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

  // Conditional rendering: show different UI based on state
  if (loading) return <div className="country-list__message">Loading countries...</div>;
  if (error) return <div className="country-list__message">Error: {error}</div>;

  return (
    <div className="country-list">
      {/* .map() loops over the array and renders a card for each country */}
      {/* key={country.cca3} uses the 3-letter code (unique per country) */}
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onClick={() => console.log('Clicked:', country.name.common)}
        />
      ))}
    </div>
  );
}

export default CountryList;
