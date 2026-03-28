# react-from-zero

A Country Explorer app built with **React + REST Countries API** — from scratch, one step at a time.

Browse 250+ countries, search by name, filter by region, and view detailed info including borders, currencies, and languages. All data comes from the free [REST Countries API](https://restcountries.com) — no API key needed.

Part of the [TechFromZero](https://github.com/dev48v) series: learn a new technology every day by building a real project.

## Quick Start

```bash
git clone https://github.com/dev48v/react-from-zero.git
cd react-from-zero
npm install
npm start
```

Opens at http://localhost:3000

## Features

- Browse all 250+ countries with flags
- Search countries by name (instant filtering)
- Filter by region (Africa, Americas, Asia, Europe, Oceania)
- Click a country → detailed view with population, currencies, languages
- Click border countries → navigate between neighbors
- Responsive grid layout (auto-adjusts columns)
- Sticky header, smooth animations

## API

Uses [REST Countries API](https://restcountries.com/v3.1) — completely free, no API key required.

| Endpoint | Description |
|----------|-------------|
| `/all?fields=...` | All countries (filtered fields for smaller response) |
| `/alpha/{code}` | Single country by 3-letter code |
| `/region/{region}` | Countries by region |
| `/name/{name}` | Search by name |

## Architecture

```
App (Router)
├── Header (sticky, clickable → home)
├── CountryList (home page)
│   ├── SearchBar (controlled input → filters by name)
│   ├── RegionFilter (dropdown → filters by continent)
│   └── CountryCard[] (grid of cards)
└── CountryDetail (detail page)
    └── Border buttons → navigate to neighbor countries
```

```
src/
├── App.js                  ← Root component + React Router
├── components/
│   ├── CountryCard.js      ← Single country card (flag + info)
│   ├── CountryList.js      ← Grid of cards + search + filter
│   ├── SearchBar.js        ← Search input (controlled component)
│   └── RegionFilter.js     ← Region dropdown
├── pages/
│   └── CountryDetail.js    ← Full country detail with borders
└── services/
    └── countryApi.js       ← REST Countries API client
```

## Step-by-Step Commits

Each commit builds on the previous one:

1. **Project setup** — React app with header and folder structure
2. **API client** — REST Countries fetch helpers with field filtering
3. **CountryCard** — Reusable card component with flag, name, and info
4. **CountryList** — Responsive grid layout with API data fetching
5. **SearchBar** — Live filtering countries by name as you type
6. **RegionFilter** — Dropdown to filter countries by continent
7. **CountryDetail** — Detail page with routing, borders, and back navigation
8. **Styling** — Sticky header, fade-in animations, clickable title
9. **README** — This file

## Key React Concepts Covered

1. **Components** — Breaking UI into reusable pieces (CountryCard, SearchBar)
2. **Props** — Passing data from parent to child
3. **useState** — Managing component state (countries, search text, loading)
4. **useEffect** — Fetching data on component mount
5. **Lifting state up** — Search/filter state lives in CountryList, passed down to inputs
6. **Conditional rendering** — Loading/error/empty states
7. **React Router** — URL-based navigation between pages
8. **useParams** — Extracting URL parameters
9. **useNavigate** — Programmatic navigation
10. **CSS Grid** — Responsive layout without media queries

## Tech Stack

- **React 18** — UI library
- **React Router** — Client-side routing
- **REST Countries API** — Free country data (no key needed)
- **CSS** — Custom styles (no UI framework)
