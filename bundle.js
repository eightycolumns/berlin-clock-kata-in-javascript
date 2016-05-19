(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var deepFreeze = require('./deepFreeze');

var BerlinClock = (function () {
  function secondsLamp(second) {
    return (second % 2 === 0) ? '1' : '0';
  }

  function fiveHourRow(hour) {
    return row(4, Math.floor(hour / 5));
  }

  function oneHourRow(hour) {
    return row(4, hour % 5);
  }

  function fiveMinuteRow(minute) {
    return row(11, Math.floor(minute / 5));
  }

  function oneMinuteRow(minute) {
    return row(4, minute % 5);
  }

  function row(totalLights, lightsOn) {
    var lightsOff = totalLights - lightsOn;

    var row = '';

    row += repeat('1', lightsOn);
    row += repeat('0', lightsOff);

    return row;
  }

  function repeat(character, times) {
    var string = '';

    for (var i = 0; i < times; i += 1) {
      string += character;
    }

    return string;
  }

  function compositeRow(hour, minute, second) {
    return (
      secondsLamp(second) +
      fiveHourRow(hour) +
      oneHourRow(hour) +
      fiveMinuteRow(minute) +
      oneMinuteRow(minute)
    );
  }

  return deepFreeze({
    secondsLamp: secondsLamp,
    fiveHourRow: fiveHourRow,
    oneHourRow: oneHourRow,
    fiveMinuteRow: fiveMinuteRow,
    oneMinuteRow: oneMinuteRow,
    compositeRow: compositeRow
  });
})();

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

var lights = document.querySelectorAll('.light');

(function updateClock() {
  var date = new Date();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var compositeRow = BerlinClock.compositeRow(hour, minute, second);

  for (var i = 0; i < compositeRow.length && i < lights.length; i += 1) {
    if (compositeRow[i] === '1') {
      turnOn(lights[i]);
    } else if (compositeRow[i] === '0') {
      turnOff(lights[i]);
    }
  }

  window.requestAnimationFrame(updateClock);
})();

function turnOn(light) {
  if (light.className.includes('off')) {
    light.className = light.className.replace('off', 'on');
  } else if (!light.className.includes('on')) {
    light.className = light.className += ' on';
  }
}

function turnOff(light) {
  if (light.className.includes('on')) {
    light.className = light.className.replace('on', 'off');
  } else if (!light.className.includes('off')) {
    light.className = light.className += ' off';
  }
}

},{"./lib/BerlinClock":1}]},{},[3]);
