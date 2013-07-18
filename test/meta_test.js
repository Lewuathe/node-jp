var vows = require('vows');
var assert = require('assert');

var nodeJP = require('../index.js');
var config = require('./test_config.json');

vows.describe('Meta information test').addBatch({
    'API access test' : {
		topic : function() {
			var params = { 
				'lang' : 'E',
				'statsDataId' : '0003003333'
			};
			var c = new nodeJP(config);
			c.meta(params, this.callback);
		},
		'Can be accessed' : function(data) {
			assert.isObject(data);
		}
	}		
}).export(module);

