'use strict';
var winston = require('winston');
require('winston-splunk');

console.log(winston.transports);
winston.add(winston.transports.splunk, require('./config'));

var i = -1;
var levels = [
  'debug',
  'info',
  'warn',
  'error'
]

setInterval(function () {
  i = (++i)%5;
  console.log(i);
  winston.log(levels[i], 'hello, I\'m a ' + levels[i] + ' level message.');
  console.log('yes?');
}, 1000);
