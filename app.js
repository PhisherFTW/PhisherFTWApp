const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    database: 'phisdvms_APPDB',
    user: 'phisdvms_admin',
    password: 'veMQsLzHv2mWZ@A',
});

db.connect((error) => {
    if(error) {
        res.send("There was an error")
    } else {
        res.send("MYSQL Connected Successfully!")
    }
})

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