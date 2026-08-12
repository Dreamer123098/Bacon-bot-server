const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// This holds the current command in RAM
let currentCmd = "none";

// Roblox bots read this
app.get('/get', (req, res) => {
    res.type('text/plain');
    res.send(currentCmd);
});

// Python bot writes this
app.post('/set', (req, res) => {
    if (req.body && req.body.cmd) {
        currentCmd = req.body.cmd;
        res.send({ status: 'success' });
    } else {
        res.status(400).send({ status: 'error' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Bacon Bot Server is running on port ${port}`);
});
