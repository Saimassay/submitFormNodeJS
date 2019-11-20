
const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;
// var mod = require('./server.js');
//var fs = require("fs");
var express = require("express");
var ejs = require("ejs");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/create', function(req,res){
	res.render('view.ejs')
	
});

app.post('/submit', urlencodedParser, function(req, res){
	// var name = req.body.name;
	// var lname = req.body.lname;
	//console.log(name + lname);
	res.render('newView.ejs',{
		name: req.body.name,
		lname: req.body.lname
	})

	// var reply = '';
	// reply += "First name is " + req.params.name;
	// reply += "Last name is " +req.params.lname;
	// res.send(reply);
	//var name = req.body.name;
	//var lname = req.body.lname;
//res.end('${res.name}');
    //res.sendFile(__dirname + '/view1.html');
	//res.send('My name is '+ name + '<br> Password is ' + lname);
	//res.render('view1.ejs')
	// response.write(mode.f(name));
	// response.write(mode.s(lname));
});


	app.listen(3000);
// var server = http.createServer(function(request, response){

//   if(request.url =='/'){
//   	response.write(mod.fact("3"));
//   	response.end();
//   }

// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
//   //console.log(helloWorld.l());
// });

