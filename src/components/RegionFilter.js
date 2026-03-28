// ============================================================
// STEP 6 — RegionFilter Component
// ============================================================
// A dropdown that filters countries by continent/region.
//
// Same "lifting state up" pattern as SearchBar:
//   - Parent controls the selected value
//   - This component just renders the <select> and reports changes
//
// Props:
//   - value: currently selected region (or "" for all)
//   - onChange: function called with new region when user selects
// ============================================================

import './RegionFilter.css';

// The 5 regions from the REST Countries API
const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function RegionFilter({ value, onChange }) {
  return (
    <select
      className="region-filter"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {/* Empty value = "show all" */}
      <option value="">Filter by Region</option>
      {REGIONS.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

export default RegionFilter;
