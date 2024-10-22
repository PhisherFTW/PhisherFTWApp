const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.listen(5000, () => {
    console.log("Server started on Port 5000");
})





/*
var http = require('http');
const port = 3000;
const fs = require('fs')

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if(error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
    ;
});



server.listen(port, function (error) {

    if (error) {
        console.log('Something broke', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
});

*/