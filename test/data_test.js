var nodeJP = require('../index.js');

function testCallBack(data){
	console.log(data);
}

var config = {
	appId : "6d736004f09f38d8fc8bb827201c1ecf9b4cb84f",
};

var params = {
	'lang' : 'E',
    'statsDataId' : '0003003333'
};

var c = new nodeJP(config);
c.search(params, testCallBack);