var http   = require('http');
var config = require('./config.json');
var toJson = require('xmljson').to_json;
var url    = require('url');

var Client = module.exports = function() {
	var self = this;
	self.options = {
		hostname : config.host,
		port : 80,
		path : '/api/' + config.version + '/app/getStatsList',
		method : 'GET'
	};
}

Client.prototype.request = function(params, cb) {
	var self = this;
	var urlObj = { query : params };
	self.options.path = self.options.path + url.format(urlObj);
	var req = http.request(self.options, function(res) {
		var responseData = '';
		//console.log("STATUS: " + res.statusCode);
		//console.log("HEADERS: " + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			responseData += chunk;
		});
		res.on('end', function() {
			toJson(responseData, function(error, data) {
				cb(data);
			});
		});
	});
	req.end();
}


/*
function thisIsCallback(data) {
	console.log("KEYS : " + Object.keys(data));
}

var c = new Client();
var params = { 
	'appId' : '6d736004f09f38d8fc8bb827201c1ecf9b4cb84f',
	'lang' : 'E',
};

c.request(params, thisIsCallback);
*/
