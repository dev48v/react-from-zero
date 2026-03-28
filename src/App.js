// ============================================================
// STEP 1 — Main App Component
// ============================================================
// The root component that renders the entire application.
// Right now it just shows a heading — we'll add components
// step by step in each commit.
//
// Why a function component?
//   - Modern React standard (not class components)
//   - Simpler syntax, works with hooks
// ============================================================

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍 Country Explorer</h1>
        <p>Explore countries around the world using the REST Countries API</p>
      </header>
    </div>
  );
}

export default App;
