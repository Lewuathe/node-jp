var http = require('http');
var config = require('./config.json');
var StatsObject = require('./StatsObject.js');
var toJson = require('xmljson').to_json;
var url    = require('url');

var Client = module.exports = function(type) {
	// Client constructor
	var self = this;
    self.options  = config.options[type];
	self.cbObject = config.cbObject[type];
}

Client.prototype.request = function(params, cb) {
	// apiClient request
	var self = this;
	self.callback = cb;
    if (self.options['method'] === 'POST') {
		// postDataset requires POST method
		self.httpPost(params);
    }
    else if (self.options['method'] === 'GET') {
		// getStatsList, getMetaInfo, getStatsData, refDataset requires GET method
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
				var cbObjectConstructor = StatsObject[self.cbObject];
				var cbObject = new cbObjectConstructor(data);
				self.callback(cbObject);
			});
		});
	});
	req.end();
}

