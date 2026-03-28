// ============================================================
// STEP 2 — REST Countries API Client
// ============================================================
// Centralized API calls to https://restcountries.com/v3.1
// This is a FREE API — no API key needed!
//
// Why a separate service file?
//   - Keeps API logic out of components
//   - Easy to change the API URL or add caching later
//   - Components just call these functions, don't know about fetch()
//
// API docs: https://restcountries.com
// ============================================================

const BASE_URL = 'https://restcountries.com/v3.1';

// Fields we actually need — requesting only these makes the response smaller
// Without this, each country returns 50+ fields we don't use
const FIELDS = 'name,capital,population,region,flags,cca3';


export async function getAllCountries() {
  // GET /all?fields=... → returns all 250+ countries
  const response = await fetch(`${BASE_URL}/all?fields=${FIELDS}`);
  if (!response.ok) throw new Error('Failed to fetch countries');
  return response.json();
}


export async function getCountryByCode(code) {
  // GET /alpha/{code} → returns one country by its 3-letter code (e.g., "USA")
  // We use the full response here (no field filter) because the detail page
  // needs more fields like borders, currencies, languages, etc.
  const response = await fetch(`${BASE_URL}/alpha/${code}`);
  if (!response.ok) throw new Error(`Country not found: ${code}`);
  const data = await response.json();
  // API returns an array with one item for alpha endpoint
  return data[0];
}


export async function getCountriesByRegion(region) {
  // GET /region/{region}?fields=... → countries in a specific region
  // Regions: Africa, Americas, Asia, Europe, Oceania
  const response = await fetch(`${BASE_URL}/region/${region}?fields=${FIELDS}`);
  if (!response.ok) throw new Error(`Failed to fetch region: ${region}`);
  return response.json();
}


export async function searchCountries(name) {
  // GET /name/{name}?fields=... → search countries by name
  // Returns partial matches (e.g., "ind" matches India, Indonesia)
  const response = await fetch(`${BASE_URL}/name/${name}?fields=${FIELDS}`);
  if (response.status === 404) return []; // no matches found
  if (!response.ok) throw new Error('Search failed');
  return response.json();
}
