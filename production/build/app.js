(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

	// When DOM is ready
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: true,
		navText: []
	});

	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7OztBQUdaLEdBQUUsZUFBRixFQUFtQixXQUFuQixDQUErQjtBQUMvQixRQUFLLElBRDBCO0FBRS9CLFVBQU8sQ0FGd0I7QUFHL0IsU0FBTyxDQUh3QjtBQUkvQixPQUFJLElBSjJCO0FBSy9CLFdBQVU7QUFMcUIsRUFBL0I7O0FBUUQsR0FBRSxhQUFGLEVBQWlCLEtBQWpCLENBQXVCLFlBQVc7QUFDakMsSUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixJQUFwQjtBQUNBLElBQUUsV0FBRixFQUFlLFdBQWY7QUFDQSxTQUFPLEtBQVA7QUFDQSxFQUpEO0FBTUEsQ0FqQkEsRUFpQkMsTUFqQkQsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOEMsR0FBckQ7QUFDRDtBQUhNLENBQVQ7O2tCQU1lLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhQIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcblx0Ly8gV2hlbiBET00gaXMgcmVhZHlcclxuXHRcdCQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcclxuXHRcdGxvb3A6dHJ1ZSxcclxuXHRcdG1hcmdpbjowLFxyXG5cdFx0aXRlbXM6IDEsXHJcblx0XHRuYXY6dHJ1ZSxcclxuXHRcdG5hdlRleHQgOiBbXSxcclxuXHR9KVxyXG5cclxuXHQkKFwiLnRvZ2dsZS1tbnVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib25cIik7XHJcblx0XHQkKFwiLm1haW4tbmF2XCIpLnNsaWRlVG9nZ2xlKCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSlcclxuXHJcbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xyXG4gIHJhbmRvbTogZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
