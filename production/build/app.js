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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7OztBQUdaLElBQUUsWUFBWTtBQUNaLFlBQVEsa0JBQUcsTUFBSCxDQUFVLEVBQVYsRUFBYyxFQUFkLENBQVI7QUFDRCxHQUZEOzs7Ozs7O0FBU0EsV0FBUyxPQUFULENBQWlCLENBQWpCLEVBQW9CO0FBQ2xCLFlBQVEsR0FBUiwyQkFBb0MsQ0FBcEM7QUFDRDtBQUVGLENBaEJBLEVBZ0JDLE1BaEJELENBQUQ7Ozs7Ozs7O0FDRkEsSUFBSSxLQUFLO0FBQ1AsVUFBUSxnQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUN6QixXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDLEdBQXJEO0FBQ0Q7QUFITSxDQUFUOztrQkFNZSxFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIUCBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gIC8vIFdoZW4gRE9NIGlzIHJlYWR5XHJcbiAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICBleGFtcGxlKEhQLnJhbmRvbSgxMCwgMjApKTtcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogSnVzdCBhbiBleGFtcGxlIGZ1bmN0aW9uXHJcbiAgICogICBERUxFVEUgSVRcclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IG4gLSByYW5kb20gbnVtYmVyIGJldHdlZW4gMTAgYW5kIDIwXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZXhhbXBsZShuKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgSGVsbG8gaW4gRVM2Li4uIEkgYW0gJHtufSAtIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAxMCBhbmQgMjBgKTtcclxuICB9XHJcblxyXG59KGpRdWVyeSkpOyIsInZhciBIUCA9IHtcclxuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhQOyJdfQ==
