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
	var statsListClient = new apiClient(config.type);
	var params = { 
		'appId' : '6d736004f09f38d8fc8bb827201c1ecf9b4cb84f',
		'lang' : 'E',
	};
		
	statsListClient.request(params, config.callback);
	
}


function testCallBack(data){
	console.log(data);
}

var config = {
	type : "getStatsList",
	callback : testCallBack
};

var c = new Client(config);

