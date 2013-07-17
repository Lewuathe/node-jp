var TableInf = require('./TableInf.js');
var ClassInf = require('./ClassInf.js');

var StatsData = module.exports = function(json){
	var self = this;
	self._data = json;

	
	self.tableInf = new TableInf(self._data['GET_STATS_DATA']['STATISTICAL_DATA']['TABLE_INF']);
	self.classInf = new ClassInf(self._data['GET_STATS_DATA']['STATISTICAL_DATA']['CLASS_INF']);
	

	self.result    = json['GET_STATS_DATA']['RESULT'];
	self.parameter = json['GET_STATS_DATA']['PARAMETER'];
}