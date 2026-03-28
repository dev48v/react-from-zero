// ============================================================
// STEP 5 — SearchBar Component
// ============================================================
// A controlled input that filters countries by name.
//
// Key React concept: "Lifting state up"
//   - SearchBar doesn't hold the search value itself
//   - Parent passes value + onChange as props
//   - This lets the parent control what happens with the search text
//
// Props:
//   - value: current search string
//   - onChange: function called with new value when user types
// ============================================================

import './SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon">🔍</span>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search for a country..."
        value={value}
        // e.target.value = what the user typed
        // We pass it UP to the parent via onChange
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
