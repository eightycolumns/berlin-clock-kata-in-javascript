(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var deepFreeze = require('./deepFreeze');

function BerlinClock() {
  var hour;
  var minute;
  var second;

  function setTime(newHour, newMinute, newSecond) {
    hour = newHour;
    minute = newMinute;
    second = newSecond;
  }

  function oneMinuteRow() {
    var row = '';

    for (var i = 0; i < minute % 5; i += 1) {
      row += 'Y';
    }

    while (row.length < 4) {
      row += 'O';
    }

    return row;
  }

  function fiveMinuteRow() {
    var row = '';

    for (var i = 0; i < Math.floor(minute / 5); i += 1) {
      row += ((row.length + 1) % 3 === 0) ? 'R' : 'Y';
    }

    while (row.length < 11) {
      row += 'O';
    }

    return row;
  }

  function oneHourRow() {
    var row = '';

    for (var i = 0; i < hour % 5; i += 1) {
      row += 'R';
    }

    while (row.length < 4) {
      row += 'O';
    }

    return row;
  }

  function fiveHourRow() {
    var row = '';

    for (var i = 0; i < Math.floor(hour / 5); i += 1) {
      row += 'R';
    }

    while (row.length < 4) {
      row += 'O';
    }

    return row;
  }

  function secondsLamp() {
    return (second % 2 === 0) ? 'Y' : 'O';
  }

  function compositeRow() {
    return (
      secondsLamp() +
      fiveHourRow() +
      oneHourRow() +
      fiveMinuteRow() +
      oneMinuteRow()
    );
  }

  return deepFreeze({
    setTime: setTime,
    oneMinuteRow: oneMinuteRow,
    fiveMinuteRow: fiveMinuteRow,
    oneHourRow: oneHourRow,
    fiveHourRow: fiveHourRow,
    secondsLamp: secondsLamp,
    compositeRow: compositeRow
  });
}

module.exports = BerlinClock;

},{"./deepFreeze":2}],2:[function(require,module,exports){
function deepFreeze(object) {
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (isObject(object[property])) {
        deepFreeze(object[property]);
      }
    }
  }

  return Object.freeze(object);
}

function isObject(object) {
  if (typeof object === 'object' && object !== null) {
    return true;
  }

  if (typeof object === 'function') {
    return true;
  }

  return false;
}

module.exports = deepFreeze;

},{}],3:[function(require,module,exports){
var BerlinClock = require('./lib/BerlinClock');

(function updateClock() {
  var date = new Date();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var berlinClock = new BerlinClock();

  berlinClock.setTime(hour, minute, second);

  var compositeRow = berlinClock.compositeRow();
  var lights = document.querySelectorAll('.light');

  for (var i = 0; i < compositeRow.length && i < lights.length; i += 1) {
    if (compositeRow[i] === 'Y' || compositeRow[i] === 'R') {
      turnOn(lights[i]);
    } else if (compositeRow[i] === 'O') {
      turnOff(lights[i]);
    }

    function turnOn(light) {
      light.className = light.className.replace('off', 'on');
    }

    function turnOff(light) {
      light.className = light.className.replace('on', 'off');
    }
  }

  window.requestAnimationFrame(updateClock);
})();

},{"./lib/BerlinClock":1}]},{},[3]);
