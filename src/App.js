// ============================================================
// STEP 1 — Main App Component
// STEP 4 — Added CountryList
// STEP 7 — Added React Router for navigation
// ============================================================
// BrowserRouter: enables URL-based navigation
// Routes/Route: maps URL paths to components
//   /              → CountryList (home page)
//   /country/:code → CountryDetail (detail page)
// ============================================================

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './pages/CountryDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>🌍 Country Explorer</h1>
          <p>Explore countries around the world using the REST Countries API</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
