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
      row += '1';
    }

    return appendOffLights(row, 4);
  }

  function fiveMinuteRow() {
    var row = '';

    for (var i = 0; i < Math.floor(minute / 5); i += 1) {
      row += '1';
    }

    return appendOffLights(row, 11);
  }

  function oneHourRow() {
    var row = '';

    for (var i = 0; i < hour % 5; i += 1) {
      row += '1';
    }

    return appendOffLights(row, 4);
  }

  function fiveHourRow() {
    var row = '';

    for (var i = 0; i < Math.floor(hour / 5); i += 1) {
      row += '1';
    }

    return appendOffLights(row, 4);
  }

  function appendOffLights(row, length) {
    while (row.length < length) {
      row += '0';
    }

    return row;
  }

  function secondsLamp() {
    return (second % 2 === 0) ? '1' : '0';
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
