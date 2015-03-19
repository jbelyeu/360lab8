var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "html/";
http.createServer(function (req, res)
{
	console.log("starting");
	var urlObj = url.parse(req.url, true, false);
	fs.readFile(ROOT_DIR + urlObj.pathname, function (err,data) 
	{
		console.log("reading");
		if (err) 
    	{
    	  res.writeHead(404);
    	  res.end(JSON.stringify(err));
    	  return;
		}
		else
		{
			res.writeHead(200);
    		res.end(data);
		}
	});
}).listen(80);

