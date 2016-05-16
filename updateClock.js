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
