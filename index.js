const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000;

// Add route code here
app.get('/', (req, res) => {
    res.send('Welcome to our School API');
});

app.listen(port, () => {
    console.log(`We are live at 127.0.0.1:${port}`);
});