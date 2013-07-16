var StatsData = module.exports = function(json){
	var self = this;
	self._data = json;
	console.log(self._data['GET_STATS_DATA']);

	

	self.result    = json['GET_STATS_DATA']['RESULT'];
	self.parameter = json['GET_STATS_DATA']['PARAMETER'];
}