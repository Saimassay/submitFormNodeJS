
var first = function(name){
	return "Hello, My first name is " + name;
}
var second = function(lname){
	return "Hello, My last name is " + lname;
}
var factorial = function (n) {
	return "factorial" + n*(n-1);
	
    
}



module.exports = {
	f: first,
	s: second,
	fact: factorial
}
//BD = require("./bigdecimal"); // https://github.com/jhs/bigdecimal.js
//ONE = new BD.BigDecimal.ONE;

// Usage : factorial(new BD.BigDecimal("number"))


//require('repl').start();