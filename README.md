# Big Five Personality Test

A web-based personality assessment based on the **Big Five (OCEAN) model** — one of the most widely accepted frameworks in personality psychology. Users answer a series of questions and receive scores across five core personality traits.

## Features

- Interactive personality questionnaire with a 1–5 scale
- Multilingual support (English and Portuguese)
- Scores calculated across the five OCEAN traits:
  - **O**penness
  - **C**onscientiousness
  - **E**xtraversion
  - **A**greeableness
  - **N**euroticism
- Results saved to a local SQLite database
- Admin panel (`/admin.html`) to view all participant results with charts

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** SQLite (`sqlite3`)
- **Frontend:** HTML, CSS, vanilla JavaScript, Chart.js

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zaenus/Big5Test.git
   cd Big5Test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3003
   ```

## Configuration

| Environment Variable | Default         | Description                        |
|----------------------|-----------------|------------------------------------|
| `PORT`               | `3003`          | Port the server listens on         |
| `DB_PATH`            | `./results.db`  | Path to the SQLite database file   |

## Usage

1. Go to `http://localhost:3003` to take the personality test.
2. Enter your name, age, and sex, then complete the questionnaire.
3. Your results will be displayed and saved to the database.
4. Visit `http://localhost:3003/admin.html` to view aggregated results and charts.

## Project Structure

```
Big5Test/
├── public/
│   ├── index.html      # Main test page
│   ├── admin.html      # Admin results panel
│   ├── script.js       # Frontend quiz logic
│   ├── admin.js        # Admin panel logic
│   └── styles.css      # Stylesheet
├── server.js           # Express server & API routes
├── package.json
└── results.db          # SQLite database (created on first run)
```

## API Endpoints

| Method | Path       | Description                        |
|--------|------------|------------------------------------|
| `POST` | `/save`    | Save a participant's test results  |
| `GET`  | `/results` | Retrieve all saved results         |

## License

ISC
