// var message = '*************** test ***************\n'
// console.log(message);
// var hello = require('./node_modules/hello.js');
// hello.sayHello();
// message = '\n script called hello.js contain: \n';
// console.log(message);
// fs = require('fs');
// fs.readFile('./node_modules/hello.js', 'utf8', function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });
// message = '*************** test ***************\n'
// console.log(message);
// ****************************************************************************
//
// var express = require('express');
// var app = express();
//
// // server
// var http = require('http');
// http.createServer(function(req, res){
//   res.writeHead(200,{
//     'Content-Type': 'text/plain'
//   });
//   res.end('Hello, world!');
// }).listen(8000);
// console.log('Server running at http://localhost:8000/');
// ****************************************************************************
var connect = require('connect');
var app = connect();

// middleware function (the functions added by use() will go on FIFO)

var logger = function(req, res, next){
  console.log(req.method, req.url);

  // call helloWorld (if not there then the middleware is stopped here)
  // so hang forever because not calling the res.end() method.
  next();
};

var helloWorld = function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
};

var goodbyeWorld = function(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Goodbye, world...');
};

app.use(logger);
// http://localhost:3000/hello
app.use('/hello', helloWorld);
// http://localhost:3000/goodbye
app.use('/goodbye', goodbyeWorld);

app.listen(3000);
console.log('Server running at http://localhost:3000/');