var nodeJP = require('../index.js');
var config = require('./test_config.json');

function testCallBack(data){
	console.log(data);
}

var params = { 
	'lang' : 'E',
	'statsDataId' : '0003003333'
};

var c = new nodeJP(config);
c.meta(params, testCallBack);
