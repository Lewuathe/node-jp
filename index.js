/*
 *  class NodeJP Client
 *
 *  @author Kai Sasaki <lewuathe@me.com>
 *  @date   2013-07-01
 *
 */

var apiClient         = require('./lib/apiClient.js');

var Client = module.exports = function(config) {
	var self    = this;
	self.config = config;
	self.appId  = config.appId;
}


Client.prototype.list = function(params, cb) {
	var self = this;
	var getStatsListClient = new apiClient('getStatsList');
	params.appId = self.appId;
	getStatsListClient.request(params, cb);
}

Client.prototype.meta = function(params, cb){
	var self = this;
	var getMetaInfoClient = new apiClient('getMetaInfo');
	params.appId = self.appId;
	getMetaInfoClient.request(params, cb);
}

Client.prototype.save = function(params, cb) {
	var self = this;
	var postDatasetClient = new apiClient('postDataset');
	params.appId = self.appId;
	postDatasetClient.request(params, cb);
}

Client.prototype.search = function(params, cb) {
	var self = this;
	var getStatsDataClient = new apiClient('getStatsData');
	params.appId = self.appId;
	getStatsDataClient.request(params, cb);
}	



