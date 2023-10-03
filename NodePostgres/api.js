const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();

app.get('/users', (req, res)=>{
    client.query(`Select * from users`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/users/:id', (req, res)=>{
    client.query(`Select * from users where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/users/store', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into users(fullname, email, address) 
                       values('${user.fullname}', '${user.email}', '${user.address}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send(`Record Inserted Successfully \n${insertQuery}`)
        }
        else{ console.log(err.message) }
    })
    client.end;
})
