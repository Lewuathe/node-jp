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


var ClassInf = module.exports = function(json) {
	var self = this;
	self.classList = [];
	for ( var k in json ) {
		var classObj = new ClassObj(json[k]);
		self.classList.push(classObj);
	}
}



