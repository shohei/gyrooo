(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	var $zo;
	$(function() {
		$zo = $("#zo");
		window.addEventListener("deviceorientation", deviceorientationHandler);
	});
	/**
	 *
	 * @param event
	 */
	function deviceorientationHandler(event) {
		//ジャイロセンサー情報取得
		// X軸
		var beta = event.beta;
		// Y軸
		var gamma = event.gamma;
		// Z軸
		var alpha = event.alpha;
		var html = "";
		html += "X回転 : " + beta + "<br>";
		html += "Y回転 : " + gamma + "<br>";
		html += 'Z回転 : ' + alpha;
		$("#debug").html(html);
		$zo.css({
			"-webkit-transform": "rotateX(" + (180 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + alpha + "deg)",
			"-moz-transform": "rotateX(" + (180 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + alpha + "deg)",
			"transform": "rotateX(" + (180 + beta) + "deg) rotateY(" + (180 + gamma) + "deg) rotateZ(" + alpha + "deg)"
		})
	}
})();


},{}],2:[function(require,module,exports){
var gyro = require('./gyro');

},{"./gyro":1}]},{},[2]);
