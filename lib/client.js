var xmlrpc = require('xmlrpc-socket');
var Torrent = require('./torrent');

/**
 * Creates a Client object for talking to rtorrent
 *
 * @constructor
 * @param {String} host              host to connect
 * @param {Number} port              port to connect
 * @return {Client}
 */
function Client(host, port) {
    // Invokes with new if called without
    if (false === (this instanceof Client)) {
	return new Client(host, port)
    }

    this.xmlClient = xmlrpc.createClient(host, port);
}

Client.prototype.host = function() {
    return this.xmlClient.host;
}

Client.prototype.port = function() {
    return this.xmlClient.port;
}

/**
 * Makes a call to rtorrent to get the list of the torrents
 *
 * @param {String} view       - the view in which the torrents are
 * @param {Function} callback - function(error, value)
 *   - {Object|null} error    - Any errors when making the call, otherwise null
 *   - {Array} value          - An array of Torrents
 */
Client.prototype.listTorrents = function(view, callback) {
    if (typeof view === 'undefined')
	view = 'main';

    var torrentProperties = Torrent.properties();
    var params = this.createMultiCallParams(view, torrentProperties);
    this.xmlClient.methodCall('d.multicall', params, function(error, value) {
	if (error)
	    callback(error,value);
	else
	{
	    var torrents = [];
	    value.forEach(function(item) {
	    	var torrent = new Torrent(item);
	    	torrents.push(torrent);
	    });
	    callback(error, torrents);
	}
    });
}

/**
 * Create parameters for a multicall
 *
 * @param {String} view   - the view in which to call the multicall
 * @param {Array} methods - the methods to call
 * @return {Array}
 */
Client.prototype.createMultiCallParams = function(view, methods) {
    params = [view];
    methods.forEach(function(method) {
	params.push(method + '=');
    });
    return params;
}

module.exports = Client;
