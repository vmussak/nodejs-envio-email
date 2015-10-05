var express = require('express');
var sender = require('./sender');

var app = express();

app.listen(3000, function() {
    console.log('Aplicação rodando!');
});

app.get('/enviaremail', function(req, res) {
	sender.send();
  	res.send('OK');
});