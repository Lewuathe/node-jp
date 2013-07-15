var nodeJP = require('../index.js');


function testCallBack(data){
	console.log(data);
}

var config = {
	appId : "6d736004f09f38d8fc8bb827201c1ecf9b4cb84f",
};

var params = { 
	'lang' : 'E',
	'surveyYears' : '198901-201201',
	'searchWord' : 'kanagawa',
	'searchKind' : 1
};

var c = new nodeJP(config);
c.list(params, testCallBack);
