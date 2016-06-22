var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
//DEFINE ALL ROUTES
app.post('/*', function(request, response) {
    response.redirect('/');
});
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});