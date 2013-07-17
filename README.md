node.jp
=======

Client library of the statics data provided by the goverment of Japan.

# How to use
You can use client's 3 APIs.
* list: Get statistics table list
* meta: Get statistics table meta information
* search: Get statictics table data
Before use these API, you need appId for configure client
from this [page](https://statdb.nstac.go.jp/apiuser/php/index.php?action=provisional "page").
With this appId, you make client like below.

    var nodeJP = require('nodeJP');

	var config = {
	    appId : <Your application id from beyond site>
    };	

    var client = new nodeJP(config);


# Statistics List
Get 


## Data Source

[Gateway to Advanced and User-friendly statics service](http://statdb.nstac.go.jp/ "Data source")
