var vows = require('vows');
var assert = require('assert');
var Client = require('../lib/client');

vows.describe('Client').addBatch({
    'A constructor with host and port' : {
	topic: function() {
	    var client = new Client('127.0.0.1', 5000);
	    return client;
	},
	'contains the right host and port' : function(topic) {
	    assert.deepEqual({port: topic.port(), host: topic.host()}, {port: 5000, host:'127.0.0.1'});
	}
    }
}).export(module);
