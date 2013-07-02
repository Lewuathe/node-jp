function makeURLParams(params) {
	var ret = '';
	var isFirst = true;
	for (key in params) {
		var value = params[key];
		if (isFirst) {
			ret += key + '=' + value;
			isFirst = false;
		}
		else {
			ret += '&' + key + '=' + value;
		}
	}
	return ret;
}

module.exports =  makeURLParams;

