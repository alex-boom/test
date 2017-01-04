(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

  // When DOM is ready
  $(function () {
    example(_helpers2.default.random(10, 20));
  });

  /**
   * Just an example function
   *   DELETE IT
   * @param  {Number} n - random number between 10 and 20
   */
  function example(n) {
    console.log('Hello in ES6... I am ' + n + ' - random number between 10 and 20');
  }
})(jQuery);

},{"./helpers":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HP = {
  random: function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

exports.default = HP;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBRVo7QUFDQSxJQUFFLFlBQVk7QUFDWixZQUFRLGtCQUFHLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxDQUFSO0FBQ0QsR0FGRDs7QUFJQTs7Ozs7QUFLQSxXQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0I7QUFDbEIsWUFBUSxHQUFSLDJCQUFvQyxDQUFwQztBQUNEO0FBRUYsQ0FoQkEsRUFnQkMsTUFoQkQsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOEMsR0FBckQ7QUFDRDtBQUhNLENBQVQ7O2tCQU1lLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhQIGZyb20gJy4vaGVscGVycyc7XG5cbihmdW5jdGlvbiAoJCkge1xuXG4gIC8vIFdoZW4gRE9NIGlzIHJlYWR5XG4gICQoZnVuY3Rpb24gKCkge1xuICAgIGV4YW1wbGUoSFAucmFuZG9tKDEwLCAyMCkpO1xuICB9KTtcblxuICAvKipcbiAgICogSnVzdCBhbiBleGFtcGxlIGZ1bmN0aW9uXG4gICAqICAgREVMRVRFIElUXG4gICAqIEBwYXJhbSAge051bWJlcn0gbiAtIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAxMCBhbmQgMjBcbiAgICovXG4gIGZ1bmN0aW9uIGV4YW1wbGUobikge1xuICAgIGNvbnNvbGUubG9nKGBIZWxsbyBpbiBFUzYuLi4gSSBhbSAke259IC0gcmFuZG9tIG51bWJlciBiZXR3ZWVuIDEwIGFuZCAyMGApO1xuICB9XG5cbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
