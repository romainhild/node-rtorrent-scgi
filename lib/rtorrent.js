var Client = require('./client');

var rtorrent = exports;

rtorrent.createClient = function(host, port) {
    if(typeof host === 'undefined') { host = '127.0.0.1';}
    if(typeof port === 'undefined') { port = 5000;}
    return new Client(host,port);
}

