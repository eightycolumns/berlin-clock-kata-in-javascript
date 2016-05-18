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

  function secondsLamp() {
    return (second % 2 === 0) ? '1' : '0';
  }

  function fiveHourRow() {
    return row(4, Math.floor(hour / 5));
  }

  function oneHourRow() {
    return row(4, hour % 5);
  }

  function fiveMinuteRow() {
    return row(11, Math.floor(minute / 5));
  }

  function oneMinuteRow() {
    return row(4, minute % 5);
  }

  function row(lights, lightsOn) {
    var lightsOff = lights - lightsOn;

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
    secondsLamp: secondsLamp,
    fiveHourRow: fiveHourRow,
    oneHourRow: oneHourRow,
    fiveMinuteRow: fiveMinuteRow,
    oneMinuteRow: oneMinuteRow,
    compositeRow: compositeRow
  });
}

module.exports = BerlinClock;
