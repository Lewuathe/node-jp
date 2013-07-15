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

Client.prototype.list = function(params, cb) {
	var self = this;
	var getStatsListClient = new apiClient('getStatsList');
	params.appId = self.appId;
	getStatsListClient.request(params, cb);
}



function testCallBack(data){
	console.log(data);
}

var config = {
	appId : "6d736004f09f38d8fc8bb827201c1ecf9b4cb84f",
};

var params = { 
	'appId' : '6d736004f09f38d8fc8bb827201c1ecf9b4cb84f',
	'lang' : 'E',
	'dataSetId' : 'kaisasak',
	'statsDataId':  12,
	'penSpecified' : 0,
		'processMode' : 'E',
	'dataSetName' : 'kaisasak_test',
	'lvArea' : 1
};

var c = new Client(config);
c.save(params, testCallBack);

