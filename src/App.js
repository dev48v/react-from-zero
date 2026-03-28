// ============================================================
// STEP 1 — Main App Component
// STEP 4 — Added CountryList
// STEP 7 — Added React Router for navigation
// STEP 8 — Sticky header, clickable title to go home
// ============================================================

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './pages/CountryDetail';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="app-header">
      <h1 onClick={() => navigate('/')}>🌍 Country Explorer</h1>
      <p>Explore countries around the world using the REST Countries API</p>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
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
