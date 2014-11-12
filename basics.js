require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({5:[function(require,module,exports){
require('./lib/highlight')
require('jquery')

console.clear()

require('./basics/types')
require('./basics/functions')
require('./basics/scopes')
require('./basics/closures')

},{"./basics/closures":6,"./basics/functions":7,"./basics/scopes":8,"./basics/types":9,"./lib/highlight":17,"jquery":3}],9:[function(require,module,exports){
// JavaScript is a dynamicaly typed language and therefore doesn't have
// datatypes as we know them from e.g. C#
// Of course they exist under the hood, but every variable can be of any type.

// The most basic datatype is a string, which is basically a list of characters
// and can be used to hold arbitrary text values

var doubleQuotes = "arbitrary text "
var singleQuotes = 'arbitrary text '

// It doesn't matter if we use double or single quotes to define them
console.log(0, doubleQuotes === singleQuotes)

// Strings can be concatenated using the "plus" operator
var newString = doubleQuotes + singleQuotes
console.log(1, newString)


// Use the "plus equals" operator to add to existing Strings
newString += 'woot'
console.log(2, newString)

// Just like defining strings we can use Numbers to perform basic Math operations
var one = 1
var two = 2

console.log(3, one + two * two)

// What's special in JS is that you can just coerce one type to another

console.log(4, '5' - '3' === 2)
console.log(5, 'high' + 5 === 'high5')
console.log(6, 4 + true === 5)
console.log(7, '19' - false === 19)

// Btw the double equals does type coercion, while tripple equals does not

console.log(8, ('10' == 10) === true)
console.log(9, ('10' === 10) === false)

// On top of primitives (Strings, Numbers) there are only Objects
// Of course there are Arrays and Functions as well, but they are just objects under the hood

// Objects just map a key to a value

var coolObject = {
  key: 'value'
}

console.log(10, coolObject)

// Arrays are a list of random things (like other Numbers, Strings and Objects)
// Note: Arrays are essentially objects that map their values to their indices)

var coolArray = [1, 2, 'heyho', 'bla']

console.log(11, coolArray)

},{}],8:[function(require,module,exports){
// The scope is basically the environment in which you can access variables
// Unlike other languages JS doesn't have block scope, but only Function scope
// Let's explore what that means

if (true) {
  var foo = 'hello'
}

// In (probably) any other language foo would be undefined
// as it's accessed outside of its scope
// In JS however blocks don't create scope

console.log(14, typeof foo !== 'undefined')

// Only Functions create a new scope

function newScope() {
  var bar = 'hello'
}

console.log(15, typeof bar === 'undefined')

},{}],7:[function(require,module,exports){
// A Function takes input, performs an action on it and returns the output

function coolFunction(input) {
  var output = input * 5
  return output
}

console.log(12, coolFunction(10) === 50)

// Note: Acutally you can omit any part of a function
// so there is no input, no action, no output and not even a name required

console.log(13, typeof function() {} === 'function')

},{}],6:[function(require,module,exports){
// Closures are functions that refer to variables that aren't acessible otherwhise
// except through the closure.
// sounds totally complicated – maybe it is – but that allows for cool stuff

function foo() {
  var bar = 3

  return function baz() {
    return bar
  }
}
var baz = foo()

console.log(16, baz() === 3)

// As we saw in the scopes chapter the variable bar is defined within foo
// and therefor not accesible from the outside
// The returned function baz however has still access to it.

},{}]},{},[5]);
