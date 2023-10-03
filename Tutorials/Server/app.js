const http = require('http'); 
const fs = require('fs'); 

const hostname = '127.0.0.1';
const port = 80;
const fileContent = fs.readFileSync('index.html', 'utf8');

const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fileContent);
});

server.listen(80, hostname, (req, res) =>{
    console.log(`Server is Running on http://${hostname}:${port}`);
});

