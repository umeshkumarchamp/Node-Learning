const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const User = require('../models/user');
const { QueryError } = require('sequelize');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE');
    next();
})

// test routes
app.get('/users', require('./routes/api')); 

// error handling 
app.use((error, req, res, next) => {
    console.error(error);
    const status = error.statusCode || 500;
    const message = error.message; 
    res.status(status).json({message: message}); 

});


// Sync database 
sequelize.sync().then(result => {
    console.log('Database synced successfully');
    app.listen(3000);

}).catch(err => {
    console.log(err);
});


