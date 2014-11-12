require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({21:[function(require,module,exports){
var $ = require('jquery')

// It is 2014, almost 2015, so the only true answer to modularity and namespacing in JS is:

/*
 _                                     _  __
| |__  _ __ _____      _____  ___ _ __(_)/ _|_   _
| '_ \| '__/ _ \ \ /\ / / __|/ _ \ '__| | |_| | | |
| |_) | | | (_) \ V  V /\__ \  __/ |  | |  _| |_| |
|_.__/|_|  \___/ \_/\_/ |___/\___|_|  |_|_|  \__, |
                                             |___/
*/

// browserify allows to require() modules in the browser, just like in node.js
// this opens up the world of over 100000 modules on npm
// without even bothering about dependency hell
// globals variables
// files with thousands of lines
// and almost all the other things that make frontend development nasty
// except for IE

// for example let's require syntax highlighting for this site
require('./lib/highlight')
// voila

// or the the other chapters of this site
var chapter1 = require('./structure/example1')
console.log(0, chapter1 === 1337)

var chapter2 = require('./structure/example2')
chapter2.hello()

var Chapter3 = require('./structure/example3')

var foo = new Chapter3('na?')
foo.greet()

Chapter3.setDefault('yo!')
var bar = new Chapter3()
bar.greet()

// And all of this without any leaked variables
// pretty magical

// but

// how does this even work?
// browserify is a preprocessor that gets one entry point
// resolves all require calls down the dependency tree
// and outputs one bundle
// pretty cool

},{"./lib/highlight":17,"./structure/example1":22,"./structure/example2":23,"./structure/example3":24,"jquery":3}],24:[function(require,module,exports){
// or a complete class plus some static methods on it?

var greeting = 'heyha'

var exports = module.exports = function CrazyClass(greeting) {
  this.greeting = greeting || CrazyClass.getDefault()
}

exports.prototype.greet = function() {
  console.log(this.greeting)
}

exports.getDefault = function() {
  return greeting
}

exports.setDefault = function(input) {
  greeting = input
}


},{}],23:[function(require,module,exports){
// now a complete object

module.exports = {
  hello: console.log.bind(console, 'hi')
}

},{}],22:[function(require,module,exports){
// let's just export a primitive value

module.exports = 1337

},{}]},{},[21]);
