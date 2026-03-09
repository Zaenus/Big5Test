const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = process.env.PORT || 3003;

app.use(express.static('public')); // Serve files from 'public' folder (put HTML/CSS/JS there)
app.use(express.json({ limit: '10kb' })); // Parse JSON bodies with size limit

// Basic security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

// SQLite database setup
const dbPath = process.env.DB_PATH || './results.db';
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
        // Create table if not exists
        db.run(`
            CREATE TABLE IF NOT EXISTS results (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                age INTEGER NOT NULL,
                sex TEXT NOT NULL,
                extraversion INTEGER NOT NULL,
                agreeableness INTEGER NOT NULL,
                conscientiousness INTEGER NOT NULL,
                neuroticism INTEGER NOT NULL,
                openness INTEGER NOT NULL,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            }
        });
    }
});

// Route to save results
app.post('/save', (req, res) => {
    const { name, age, sex, extraversion, agreeableness, conscientiousness, neuroticism, openness } = req.body;

    // Input validation
    const allowedSex = ['Male', 'Female', 'Other', 'Prefer not to say'];
    const scores = { extraversion, agreeableness, conscientiousness, neuroticism, openness };

    if (typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
        return res.status(400).json({ error: 'Invalid name' });
    }
    const ageNum = Number(age);
    if (!Number.isInteger(ageNum) || ageNum < 1 || ageNum > 120) {
        return res.status(400).json({ error: 'Invalid age' });
    }
    if (!allowedSex.includes(sex)) {
        return res.status(400).json({ error: 'Invalid sex value' });
    }
    for (const [trait, value] of Object.entries(scores)) {
        const num = Number(value);
        if (!Number.isInteger(num) || num < 0 || num > 100) {
            return res.status(400).json({ error: `Invalid score for ${trait}` });
        }
    }

    db.run(`
        INSERT INTO results (name, age, sex, extraversion, agreeableness, conscientiousness, neuroticism, openness)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [name, age, sex, extraversion, agreeableness, conscientiousness, neuroticism, openness], function(err) {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(500).json({ error: 'Failed to save results' });
        }
        res.json({ success: true });
    });
});

// Route to fetch all results for admin
app.get('/results', (req, res) => {
    db.all('SELECT * FROM results ORDER BY timestamp DESC', [], (err, rows) => {
        if (err) {
            console.error('Error fetching data:', err.message);
            return res.status(500).json({ error: 'Failed to fetch results' });
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});