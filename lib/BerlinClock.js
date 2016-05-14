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

  return deepFreeze({
    setTime: setTime,
    oneMinuteRow: oneMinuteRow,
    fiveMinuteRow: fiveMinuteRow
  });
}

module.exports = BerlinClock;
