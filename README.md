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

And then you can get various data with this client.

## # Statistics List
Get statistics table list. All API need callback function made by you. For example,

    function yourCallback(data) {
        // Write your code
        // data is different respective API 
    }
    
    client.list(params, yourCallback);

Parameters which should be set are written in this [manual](http://statdb.nstac.go.jp/wp/wp-content/uploads/2013/06/API-spec.pdf "manual")

| Parameter key | A use | Example |
|:-----------|------------:|:------------:|
| lang  | Response default language | `E` or `J` |
| surveyYears |  The time of target data is surveyed | Format is `yyyy` or `yyyymm` or `yyyymm-yyyymm` |
| openYears  | The time of target data is opened |    Format is `yyyy` or `yyyymm` or `yyyymm-yyyymm`    |
| statsField | The field of target statistics data  | 2-digit or 4-digit number which is based on [category of statistics of Japan](http://www.e-stat.go.jp/SG1/htoukeib/TopDisp.do?bKind=10 "category of statistics of Japan") |
| left       |       right |    center    |
| aligned    |     aligned |   aligned    |

## Data Source

[Gateway to Advanced and User-friendly statics service](http://statdb.nstac.go.jp/ "Data source")
