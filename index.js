/*
 *  class NodeJP Client
 *
 *  @author Kai Sasaki <lewuathe@me.com>
 *  @date   2013-07-01
 *
 */

var statsListClient   = require('./lib/statsListClient.js');
var metaInfoClient    = require('./lib/metaInfoClient.js');
var statsDataClient   = require('./lib/statsDataClient.js');
var postDataSetClient = require('./lib/postDataSetClient.js');
var refDataSetClient  = require('./lib/refDataSetClient.js');

var Client = module.exports = function(config) {
	var self    = this;
	self.config = config;
	
	
}