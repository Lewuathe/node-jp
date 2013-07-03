var http = require('http');
var config = require('./config.json');
var toJson = require('xmljson').to_json;
var url    = require('url');


var Client = module.exports = function(type) {
	var self = this;
    self.options = config.options[type];
}

Client.prototype.request = function(params, cb) {
	var self = this;
    if (self.options['method'] === 'POST') {

    }
    else if (self.options['method'] === 'GET') {
	    var urlObj = { query : params };
	    self.options.path = self.options.path + url.format(urlObj);
    }
	var req = http.request(self.options, function(res) {
		var responseData = '';
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

function httpPost(options) {
    
}

function httpGet(options) {

}

