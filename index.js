var express = require('express');
var app = express();
var Client = require('./lib/rtorrent');

app.get('/', function(req, res) {
    var client = Client.createClient();
    client.listTorrents('main', function(error, value) {
	if(error)
	    res.send(error);
	else
	    res.send(value);
    });
});

app.listen(3001, function() {
    console.log('Start listening on 3001');
});

