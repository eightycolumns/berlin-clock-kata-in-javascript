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

    row = appendOnLights(row, minute % 5);
    row = appendOffLights(row, 4 - row.length);

    return row;
  }

  function fiveMinuteRow() {
    var row = '';

    row = appendOnLights(row, Math.floor(minute / 5));
    row = appendOffLights(row, 11 - row.length);

    return row;
  }

  function oneHourRow() {
    var row = '';

    row = appendOnLights(row, hour % 5);
    row = appendOffLights(row, 4 - row.length);

    return row;
  }

  function fiveHourRow() {
    var row = '';

    row = appendOnLights(row, Math.floor(hour / 5));
    row = appendOffLights(row, 4 - row.length);

    return row;
  }

  function appendOnLights(row, number) {
    for (var i = 0; i < number; i += 1) {
      row += '1';
    }

    return row;
  }

  function appendOffLights(row, number) {
    for (var i = 0; i < number; i += 1) {
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
