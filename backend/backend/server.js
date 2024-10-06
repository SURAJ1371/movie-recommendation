const express = require('express');
const cors = require('cors');
const { PythonShell } = require('python-shell');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/recommend', (req, res) => {
    const { preferences } = req.body;
    
    let options = {
        args: [preferences]
    };

    PythonShell.run('recommendation.py', options, function (err, result) {
        if (err) throw err;
        res.json({ recommendations: JSON.parse(result[0]) });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
