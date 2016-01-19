var express = require('express');
var app = express();
var count = 0;


app.use(function(request, response, next) {
	console.log(request.method + " " + request.path);
	next();
});

app.use(function(request, response, next) {
	count++;
	console.log(count + " people visited this page");
	next();
});

app.use('/special',function(request, response, next) {
	console.log("You're in the special area");
	next();
});

app.get('/special', function(request, response) {
	response.send("you are in the special section");
});

app.get('/news', function(request, response) {
	response.send("This is the news section");
});

app.get('/', function(request, response, next) {
	response.send("Welcome to our twitter clone!!!")
	// console.log(response.statusCode);
	next();
});

app.use(function(request, response, next) {
	console.log(request.method + " " + request.path + " " + response.statusCode);
	next();
});

app.post('/posthere', function(request, response){
	response.send("This is a place to post things");
})

app.put('/', function(request, response) {
	response.send("You can update things here");
});

app.listen(3000, function(){
	console.log("Listening on port 3000");
});