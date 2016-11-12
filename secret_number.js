'use strict';
module.exports = function() {
var theSecretNumber = Math.random() * 1000000;
return function generateSecretNumber(){
  return theSecretNumber;

 

};

  
};

//======================================================

/* const secret = require('secret_number.js') //if you were importing it into another file


var myNum = secret(); // generates random #, returns: function mysecretNumber

myNum(); //123
myNum(); //123

var myNum2 = secret();

myNum2(); //567
myNum2(); //567

myNum1(); //123 */