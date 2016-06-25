var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var firebase = require('firebase');

//Init firebase configs
firebase.initializeApp({
    databaseURL: 'https://testfbapp-d6aee.firebaseio.com/',
    serviceAccount: 'firebaseConfig.json'
});

app.post('/subscribe', jsonParser, function (req, res) {
    firebase.database().ref('/').push({
        email: req.body.subscribeMe
    }, function(err){
        if (err) {
            res.send({success: false, message: err});
        } else {
            res.send({success: true, message:"Data saved successfully"})
        }
    });
});

app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 5000));

app.post('/*', function(req, res) {
    res.redirect('/');
});
app.get('/', function(req, res) {
    res.send('App is running');
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});