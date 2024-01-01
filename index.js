var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello all Welcome to the AeronFly Group'); //write a response to the client
  res.write('This Website is Hosted by Shrikant Patil'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
