
const express = require('express');
const app = express();
const port = 3000;
const primes = require('./primes.js');
const fs = require('fs');
const power = require('./power.js');

app.get('/', function(req, res){
	fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
})

app.get('/isPrime/:number', function(req, res){
    res.status(200).send(primes.isPrime(req.params.number));    
})

app.get('/isPower/:number%20:number', function(req, res){
  res.status(200).send(isPower.isPower(req.poparams.number, req.poparams.number));    
})

exports.stop = function(){
    server.close();
}
const server = app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
