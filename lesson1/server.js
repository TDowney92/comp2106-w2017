// link to the http module that ships with node

var http = require ('http');

// stat the http server

http.createServer(function(request, response) {
	// send a response to the browser
	response.writeHead(200);  //http status code ok
	response.write('<h1>Our First Node Page</h1>');
	response.end();
}).listen(3000);

// display message in command prompt
console.log('Server running on port 3000');
