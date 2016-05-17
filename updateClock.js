var BerlinClock = require('./lib/BerlinClock');

var berlinClock = new BerlinClock();

var lights = document.querySelectorAll('.light');

(function updateClock() {
  var date = new Date();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  berlinClock.setTime(hour, minute, second);

  var compositeRow = berlinClock.compositeRow();

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
  light.className = light.className.replace('off', 'on');
}

function turnOff(light) {
  light.className = light.className.replace('on', 'off');
}
