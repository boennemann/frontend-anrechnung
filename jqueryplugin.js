require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({13:[function(require,module,exports){
require('./lib/highlight')

var $ = require('jquery')

require('./jqueryplugin/uppercase')($)
require('./jqueryplugin/lowercase')($)

// So whenever we click the buttons above let's upper/lowercase our headlines

var $headings = $('h1')

$('#upper').click(function() {
  $headings.uppercase()
})

$('#lower').click(function() {
  $headings.lowercase()
})

// But now let's do it stateful, so we can reset
require('./jqueryplugin/stateful')($)
var $headings2 = $('h2')

$('#upperS').click(function() {
  $headings2.uppercaseS()
})

$('#lowerS').click(function() {
  $headings2.lowercaseS()
})

$('#reset').click(function() {
  $headings2.reset()
})

},{"./jqueryplugin/lowercase":14,"./jqueryplugin/stateful":15,"./jqueryplugin/uppercase":16,"./lib/highlight":17,"jquery":3}],16:[function(require,module,exports){
// Let's write a small jQuery plugin that uppercases the textlabels
// of the elements we call it on

module.exports = function($) {
  $.fn.uppercase = function() {
    this.each(function(idx, element) {
      var $element = $(element)
      $element.text($element.text().toUpperCase())

    })
  }
}

},{}],15:[function(require,module,exports){
// This is a stateful variant of lower/upercase that also offers reset

var exports = module.exports = function($) {
  var setLabel = exports.setLabel.bind(null, $)
  var getLabel = exports.getLabel.bind(null, $)

  $.extend($.fn, {
    lowercaseS: function() {
      this.each(function(idx, element) {
        setLabel(element)
        var $element = $(element)
        $element.text($element.text().toLowerCase())
      })
    },
    uppercaseS: function() {
      this.each(function(idx, element) {
        setLabel(element)
        var $element = $(element)
        $element.text($element.text().toUpperCase())
      })
    },
    reset: function() {
      this.each(function(idx, element) {
        var label = getLabel(element)
        if (label === null) return
        $(element).text(label)
      })
    }
  })
}

var key = 'originalLabel'
exports.setLabel = function($, element) {
  if ($.data(element, key) != null) return

  $.data(element, key, $(element).text())
}

exports.getLabel = function($, element) {
  return $.data(element, key) || null
}

},{}],14:[function(require,module,exports){
// Let's write a small jQuery plugin that lowercases the textlabels
// of the elements we call it on

module.exports = function($) {
  $.fn.lowercase = function() {
    this.each(function(idx, element) {
      var $element = $(element)
      $element.text($element.text().toLowerCase())
    })
  }
}

},{}]},{},[13]);
