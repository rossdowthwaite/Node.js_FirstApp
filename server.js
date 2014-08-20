/*
 	Setup a Local server
*/ 

// require nodes http module 
var http = require("http");
var url = require("url");

// wrap server code in function to creat a module.
function start(route, handle) {
	function onRequest(request, response) {
		// set post data variable to hold the chunks of data
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " recieved");
		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;
