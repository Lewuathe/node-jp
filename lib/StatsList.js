var AstatsList = function(json){
	var self = this;
	self.id           = json['$']['id'];
	self.name         = json['STAT_NAME']['_'];
	self.organization = json['GOV_ORG']['_'];
	self.detailName   = json['STATISTICS_NAME'];
	self.title        = json['TITLE']['_'];
	self.surveyDate   = json['SURVEY_DATE'];
	self.openDate     = json['OPEN_DATE'];
}

var StatsList = module.exports = function(json) {
	var self = this;
    self._data        = json;
	self._datalistInf = json['GET_STATS_LIST']['DATALIST_INF'];

	self.result      = json['GET_STATS_LIST']['RESULT'];
	self.parameter   = json['GET_STATS_LIST']['PARAMETER'];
	self.number  = self._datalistInf['NUMBER'];
	self.list = [];
	for (var i = 0; i < self.number; i++) {
		var aStatsList = new AstatsList(self._datalistInf['LIST_INF'][i+'']);
		self.list.push(aStatsList);
	}
}