const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3003;

app.use(express.static('public')); // Serve files from 'public' folder (put HTML/CSS/JS there)
app.use(express.json()); // Parse JSON bodies

// SQLite database setup
const db = new sqlite3.Database('./results.db', (err) => {
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