var nodeJP = require('../index.js');
var config = require('./test_config.json');


function testCallBack(data){
	console.log(data);
}

var params = { 
	'lang' : 'E',
	'surveyYears' : '198901-201201',
	'searchWord' : 'kanagawa',
	'searchKind' : 1
};

var c = new nodeJP(config);
c.list(params, testCallBack);
