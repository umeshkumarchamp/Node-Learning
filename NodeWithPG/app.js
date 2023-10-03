const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = 5000;
const dbUser = require('./connection'); 

app.use(express.json());

// app.get('/', (req,res) => {
//     res.send('Hello From Express');
// }); 

app.post('/users/store', dbUser.createUser);
app.get('/users/get-all', dbUser.getUsers);

app.listen(PORT,()=>console.log('Server listening on port '+PORT));

