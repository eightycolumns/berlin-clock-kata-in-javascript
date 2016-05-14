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

    it('is YYOO at minute 12', function () {
      berlinClock.setTime(0, 12, 0);
      expect(berlinClock.oneMinuteRow()).toBe('YYOO');
    });

    it('is YYYO at minute 13', function () {
      berlinClock.setTime(0, 13, 0);
      expect(berlinClock.oneMinuteRow()).toBe('YYYO');
    });

    it('is YYYY at minute 14', function () {
      berlinClock.setTime(0, 14, 0);
      expect(berlinClock.oneMinuteRow()).toBe('YYYY');
    });
  });

  describe('five-minute row', function () {
    it('is OOOOOOOOOOO at minute 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('OOOOOOOOOOO');
    });

    it('is YYRYYRYYRYY at minute 59', function () {
      berlinClock.setTime(0, 59, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('YYRYYRYYRYY');
    });

    it('is OOOOOOOOOOO at minute 4', function () {
      berlinClock.setTime(0, 4, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('OOOOOOOOOOO');
    });

    it('is YOOOOOOOOOO at minute 5', function () {
      berlinClock.setTime(0, 5, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('YOOOOOOOOOO');
    });
  });
});
