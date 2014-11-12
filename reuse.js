require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({18:[function(require,module,exports){
require('./lib/highlight')
require('jquery')

console.clear()

require('./reuse/prototypes')
require('./reuse/mixins')

},{"./lib/highlight":17,"./reuse/mixins":19,"./reuse/prototypes":20,"jquery":3}],20:[function(require,module,exports){
// JS lacks a class system
// There is prototypal inheritance though
// So whenever a function is called with the "new" keyword the prototype will be set up
// Note: It's a convention to begin functions with an uppercase letter,
// when they're supposed to be called with "new"

function CoolPrototype(greeting) {
  this.greeting = greeting || 'hello'
}

CoolPrototype.prototype.hello = function() {
  console.log(this.greeting)
}

var foo = new CoolPrototype()
foo.hello()
console.log(0, foo.hasOwnProperty('greeting') === true)
console.log(1, foo.hasOwnProperty('hello') === false)

// Without the "new" keyword there is no prototype

console.log(2, new CoolPrototype() instanceof CoolPrototype)
console.log(3, CoolPrototype() === undefined)

// But if we really want people to have a prototype there is a neat little "hack"

function EvenCoolerPrototype() {
  if (!(this instanceof EvenCoolerPrototype)) return new EvenCoolerPrototype()
}

console.log(4, new EvenCoolerPrototype() instanceof EvenCoolerPrototype)
console.log(5, EvenCoolerPrototype() instanceof EvenCoolerPrototype)

// There a different ways to set up the prototype

var coolStuff = {
  hello: function() {
    console.log('moin')
  },
  inherited: true
}

var bar = Object.create(coolStuff)
bar.hello()

console.log(6, bar.inherited === true)

},{}],19:[function(require,module,exports){
// Mixins aren't a part of JS natively, but as almost anything they can be used via libaries

var $ = require('jquery')

// For example jQuery offers an implemenation of "extend"
console.log(7, typeof $.extend === 'function')

// Extend doesn't make use of the prototype (which might be more performant)
// and it doesn't have single inheritance

var foo = {
  a: 1
}

var bar = {
  b: 2
}

var baz = {}

$.extend(baz, bar, foo)

console.log(8, baz.a === 1)
console.log(9, baz.b === 2)

// but loading jQuery only to use extend seems a little over the top
// Let's use "extend" – a tiny npm module, that does only one thing and does it well

var extend = require('extend')

var boz = {}

extend(boz, bar, foo)

console.log(8, boz.a === 1)
console.log(9, boz.b === 2)

},{"extend":2,"jquery":3}]},{},[18]);
