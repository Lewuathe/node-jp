var TableInf = module.exports = function(json) {
	var self = this;
	self.id           = json['$']['id'];
	self.name         = json['STAT_NAME']['_'];
	self.organization = json['GOV_ORG']['_'];
	self.detailName   = json['STATISTICS_NAME'];
	self.title        = json['TITLE']['_'];
	self.surveyDate   = json['SURVEY_DATE'];
}