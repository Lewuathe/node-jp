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
	self.callback = cb;
    if (self.options['method'] === 'POST') {
		self.httpPost(params);
    }
    else if (self.options['method'] === 'GET') {
		self.httpGet(params);
    }
}

Client.prototype.httpPost = function(params) {
	var self = this;
	var urlObj = { query : params };
    var req = http.request(self.options, function(res) {
		var responseData = '';
		res.on('data', function(chunk) {
			responseData += chunk;
		});
		res.on('end', function() {
			toJson(responseData, function(error, data) {
				self.callback(data);
			});
		});
	});
	req.write(url.format(urlObj).substring(1));
	req.end();
}

Client.prototype.httpGet = function(params) {
	var self = this;
	var urlObj = { query : params };
	self.options.path = self.options.path + url.format(urlObj);
    var req = http.request(self.options, function(res) {
		var responseData = '';
		res.on('data', function(chunk) {
			responseData += chunk;
		});
		res.on('end', function() {
			toJson(responseData, function(error, data) {
				self.callback(data);
			});
		});
	});
	req.end();
}

