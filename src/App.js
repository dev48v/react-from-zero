// ============================================================
// STEP 1 — Main App Component
// STEP 4 — Added CountryList to render the grid
// ============================================================

import './App.css';
import CountryList from './components/CountryList';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍 Country Explorer</h1>
        <p>Explore countries around the world using the REST Countries API</p>
      </header>
      <main>
        <CountryList />
      </main>
    </div>
  );
}

export default App;
