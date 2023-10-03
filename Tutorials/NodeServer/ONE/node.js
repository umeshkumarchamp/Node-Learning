const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080; 
const host = '127.0.0.1';

const home = fs.readFileSync('home.html');
const contact = fs.readFileSync('contact.html');
const services = fs.readFileSync('services.html');
const about = fs.readFileSync('about.html');

const server = http.createServer((req, res) =>{
    console.log(req.url);
    url=req.url; 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');
    if(url =='/'){
        res.end(home);
    }else if(url == '/about'){
        res.end(about);
    }else if(url =='/services'){
        res.end(services);
    }else if(url == '/contact'){
        res.end(contact);
    }else{
        res.statusCode = 404;
        res.end('<h1> 404 Not Found</h1>');
    }
});

server.listen(port, host , (req, res) =>{
    console.log(`Server listening on http://${host}:${port}`);
});