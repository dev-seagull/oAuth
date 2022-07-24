const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
});

app.listen(5000, () => console.log('Listening on port:5000'));