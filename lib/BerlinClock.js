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
