var TableInf = require('./TableInf.js');
var ClassInf = require('./ClassInf.js');



var MetaInfo = module.exports = function(json){
	var self = this;
	self._data = json;
	self._metaDataInf = json['GET_META_INFO']['METADATA_INF'];

	self.tableInf     = new TableInf(self._metaDataInf['TABLE_INF']);

	self.classInf     = new ClassInf(self._metaDataInf['CLASS_INF']);

	self.result       = json['GET_META_INFO']['RESULT'];
	self.parameter    = json['GET_META_INFO']['PARAMETER'];
	
}