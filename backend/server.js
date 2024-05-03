const express = require('express');
const path = require('path'); // Importera path-modulen
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    // Använd path.join för att bygga den absoluta sökvägen till index.html
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(`Mottaget formulärdata:
    Namn: ${name}
    E-post: ${email}
    Meddelande: ${message}`);

    res.send('Tack för ditt meddelande!');
});

app.listen(port, () => {
    console.log(`Servern lyssnar på port ${port}`);
});
