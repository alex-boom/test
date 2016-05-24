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

  window.onload = function () {
    document.getElementById('add').onclick = startDiscus;
  };

  function startDiscus() {

    var text = document.getElementById('txt').value;
    var comm = document.createElement('p');
    var newText = document.createTextNode(text);

    comm.appendChild(newText);

    document.getElementById('discus').appendChild(comm);
    return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7OztBQUdaLElBQUUsWUFBWTtBQUNaLFlBQVEsa0JBQUcsTUFBSCxDQUFVLEVBQVYsRUFBYyxFQUFkLENBQVI7QUFDRCxHQUZEOzs7Ozs7O0FBU0EsV0FBUyxPQUFULENBQWlCLENBQWpCLEVBQW9CO0FBQ2xCLFlBQVEsR0FBUiwyQkFBb0MsQ0FBcEM7QUFDRDs7QUFFRCxTQUFPLE1BQVAsR0FBZ0IsWUFBVTtBQUN4QixhQUFTLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsT0FBL0IsR0FBeUMsV0FBekM7QUFDRyxHQUZMOztBQUlHLFdBQVMsV0FBVCxHQUFzQjs7QUFFckIsUUFBSSxPQUFPLFNBQVMsY0FBVCxDQUF3QixLQUF4QixFQUErQixLQUExQztBQUNBLFFBQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWDtBQUNBLFFBQUksVUFBVSxTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBZDs7QUFFQSxTQUFLLFdBQUwsQ0FBaUIsT0FBakI7O0FBRUEsYUFBUyxjQUFULENBQXdCLFFBQXhCLEVBQWtDLFdBQWxDLENBQThDLElBQTlDO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFFRixDQWhDQSxFQWdDQyxNQWhDRCxDQUFEOzs7Ozs7OztBQ0ZBLElBQUksS0FBSztBQUNQLFVBQVEsZ0JBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDekIsV0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4QyxHQUFyRDtBQUNEO0FBSE0sQ0FBVDs7a0JBTWUsRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSFAgZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cclxuICAvLyBXaGVuIERPTSBpcyByZWFkeVxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgZXhhbXBsZShIUC5yYW5kb20oMTAsIDIwKSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEp1c3QgYW4gZXhhbXBsZSBmdW5jdGlvblxyXG4gICAqICAgREVMRVRFIElUXHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSBuIC0gcmFuZG9tIG51bWJlciBiZXR3ZWVuIDEwIGFuZCAyMFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGV4YW1wbGUobikge1xyXG4gICAgY29uc29sZS5sb2coYEhlbGxvIGluIEVTNi4uLiBJIGFtICR7bn0gLSByYW5kb20gbnVtYmVyIGJldHdlZW4gMTAgYW5kIDIwYCk7XHJcbiAgfVxyXG5cclxuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQnKS5vbmNsaWNrID0gc3RhcnREaXNjdXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgZnVuY3Rpb24gc3RhcnREaXNjdXMoKXtcclxuICAgICAgXHJcbiAgICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dCcpLnZhbHVlO1xyXG4gICAgICB2YXIgY29tbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgdmFyIG5ld1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcclxuICAgICAgXHJcbiAgICAgIGNvbW0uYXBwZW5kQ2hpbGQobmV3VGV4dCk7XHJcbiAgICAgIFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzY3VzJykuYXBwZW5kQ2hpbGQoY29tbSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xyXG4gIHJhbmRvbTogZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
