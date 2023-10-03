const express = require('express');

const app = express();
const port = 80;

app.get('/', (req, res) =>{
    res.send('This is my first express with CodizWorld');
});

app.get('/about', (req, res) =>{
    res.send('This is About Page');
});

app.post('/contact', (req, res) =>{
    res.send('This is Contact Page');
});
app.listen(port, (req, res) =>{
    console.log(`App is Running  at port ${port}`);
});