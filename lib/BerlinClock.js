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
    var row = '';

    row += repeat('1', Math.floor(hour / 5));
    row += repeat('0', 4 - row.length);

    return row;
  }

  function oneHourRow() {
    var row = '';

    row += repeat('1', hour % 5);
    row += repeat('0', 4 - row.length);

    return row;
  }

  function fiveMinuteRow() {
    var row = '';

    row += repeat('1', Math.floor(minute / 5));
    row += repeat('0', 11 - row.length);

    return row;
  }

  function oneMinuteRow() {
    var row = '';

    row += repeat('1', minute % 5);
    row += repeat('0', 4 - row.length);

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
