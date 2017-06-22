var express = require('express');                                  		// including express into project
var app = express();													// setting express to keyword app
var http = require ('http').Server(app);								// passing in expree app to the server


app.use(express.static(__dirname));										//send files and read dir name

app.get('/', function(req, res){																								
	res.sendFile(__dirname + '/index.html');							// send them whats on the index.html
})

http.listen(process.env.PORT || 3000, function(){						// Opening port 3000
	console.log('the application is listening on port 3000');			// 
}) 


// WebServer for application