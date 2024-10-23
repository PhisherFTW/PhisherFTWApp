const express = require("express");
const mysql = require("mysql");
const port = 5000;
const app = express();

const x = 1;
const y = 2;
const z = 3;

console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);


const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'phisdvms_APPDB',
    user: 'phisdvms_admin',
    password: 'veMQsLzHv2mWZ@A',
});

console.count(
    'The value of x is ' + x + ' and has been checked .. how many times?'
);

db.connect(function(err) {
    if (err) {
        console.log("error occurred while connecting");
        alert("Something went wrong!");
    } else {
        console.log("connection created with mysql successfully");
        alert("Something went right!");
    }
});

app.get("/", (req, res) => {
    res.send("<h1>Is this actually working?</h1>");
    console.log("testing please work!")
});

app.listen(5000, () => {
    console.log("Server started on Port 5000");
});

console.log('testing')

console.count(
    'The value of y is ' + y + ' and has been checked .. how many times?'
);


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