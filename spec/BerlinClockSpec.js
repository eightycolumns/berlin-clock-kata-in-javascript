var BerlinClock = require('../lib/BerlinClock');

describe('Berlin Clock', function () {
  var berlinClock;

  beforeEach(function () {
    berlinClock = new BerlinClock();
  });

  describe('one-minute row', function () {
    it('is OOOO at minute 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.oneMinuteRow()).toBe('OOOO');
    });

    it('is YYYY at minute 59', function () {
      berlinClock.setTime(0, 59, 0);
      expect(berlinClock.oneMinuteRow()).toBe('YYYY');
    });

    it('is OOOO at minute 10', function () {
      berlinClock.setTime(0, 10, 0);
      expect(berlinClock.oneMinuteRow()).toBe('OOOO');
    });

    it('is YOOO at minute 11', function () {
      berlinClock.setTime(0, 11, 0);
      expect(berlinClock.oneMinuteRow()).toBe('YOOO');
    });
  });
});
