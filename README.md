# CarzMella – Would You Rather Game

This project is a simple "Would You Rather" game built with Express and EJS. The user picks one of two options shown as pairs; when all choices are completed, a results overlay appears listing the selected items and the percentage of people who chose them.

## Features

- **Question flow**: Choose between options presented in pairs.
- **Animation and feedback**: After a selection, a short modal displays a percentage.
- **Results overlay**: When all pairs are finished, a results screen summarizes your choices and percentages.
- **Play again**: Restart the game from the results screen.

## Technology

- Node.js, Express.js
- EJS (templates)
- CSS3
- Vanilla JavaScript

## Setup

Prerequisite: Node.js and npm should be installed.

1. Install dependencies:

```
npm install
```

2. Start the app:

```
npm start
```

For development with auto-restart:

```
npm run dev
```

3. Open in the browser:

```
http://localhost:3000
```

## Project Structure

- `app.js`: Express server and routes
- `public/`: Static assets
  - `css/style.css`: Global styles
  - `js/main.js`: Game flow and results overlay logic
  - `img/`: Images served to the client
- `views/`: EJS templates
  - `layouts/main.ejs`: Main layout
  - `would-rather.ejs`: Game page

## Development Notes

- Selections are stored in `public/js/main.js` via the arrays `carName`, `carModel`, and `carValue`.
- After the final pair, `showResults()` displays the results overlay (`#resultsOverlay`).
- The "Play Again" button resets the app to its initial state.

## License

This project is licensed under the ISC License. See `LICENSE.md` for details.
