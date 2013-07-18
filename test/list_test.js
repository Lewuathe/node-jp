var vows = require('vows');
var assert = require('assert');

var nodeJP = require('../index.js');
var config = require('./test_config.json');

vows.describe('Data list test').addBatch({
    'API access test' : {
		topic : function() {
			var params = { 
				'lang' : 'E',
				'surveyYears' : '201001-201201',
				'searchKind' : 2
			};
			var c = new nodeJP(config);
			c.list(params, this.callback);
		},
		'Can be accessed' : function(data) {
			assert.isObject(data);
		}
	}		
}).export(module);
