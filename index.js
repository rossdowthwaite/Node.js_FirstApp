var server = require("./server"); // import the server file
var router = require("./router"); // import the router
var requestHandlers = require("./requestHandlers");


var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] =  requestHandlers.show;

// call the start function with router
server.start(router.route, handle);