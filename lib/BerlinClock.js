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
