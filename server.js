var express = require('express');
var app = express();


app.use('/app', express.static('src'));
app.use('/lib', express.static('node_modules'));

app.get('/', function (req, res) {
	res.send("Your ipaddress is ");
});

app.get('/hello', function (req, res) {
	res.send("Hello. Welcome to NodeJS.");
});

app.get('/helloworld', function (req, res) {
	res.send("Hello World.");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});