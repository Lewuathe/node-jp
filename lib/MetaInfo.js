
var ClassObj = function(json) {
	var self = this;
	self.name = json['$']['name'] ? json['$']['name'] : 'noname';
	self._class = json['CLASS'];

	if ( self._class['$'] ) {
		self.factor = self._class['$'];
	}
	else {
		self.factors = [];
		for( var factor in self._class ) {
			self.factors.push(self._class[factor+'']['$']);
		}
	}
}

var MetaInfo = module.exports = function(json){
	var self = this;
	self._data = json;
	self._metaDataInf = json['GET_META_INFO']['METADATA_INF'];

	self.id           = self._metaDataInf['TABLE_INF']['$']['id'];
	self.name         = self._metaDataInf['TABLE_INF']['STAT_NAME']['_'];
	self.organization = self._metaDataInf['TABLE_INF']['GOV_ORG']['_'];
	self.detailName   = self._metaDataInf['TABLE_INF']['STATISTICS_NAME'];
	self.title        = self._metaDataInf['TABLE_INF']['TITLE']['_'];
	self.surveyDate   = self._metaDataInf['TABLE_INF']['SURVEY_DATE'];

	self._classObj    = self._metaDataInf['CLASS_INF']['CLASS_OBJ'];
	self.classList    = [];
	for ( var k in self._classObj ) {
		var classObj = new ClassObj(self._classObj[k]);
		console.log(classObj);
		self.classList.push(classObj);
	}
	
	self.result       = json['GET_META_INFO']['RESULT'];
	self.parameter    = json['GET_META_INFO']['PARAMETER'];
	
}