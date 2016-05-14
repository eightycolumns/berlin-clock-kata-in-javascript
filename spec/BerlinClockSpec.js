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

    it('is YYRYYROOOOO at minute 30', function () {
      berlinClock.setTime(0, 30, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('YYRYYROOOOO');
    });

    it('is YYRYYRYYRYO at minute 54', function () {
      berlinClock.setTime(0, 54, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('YYRYYRYYRYO');
    });

    it('is YYRYYRYYRYY at minute 55', function () {
      berlinClock.setTime(0, 55, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('YYRYYRYYRYY');
    });
  });

  describe('one-hour row', function () {
    it('is OOOO at hour 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('OOOO');
    });

    it('is RRRO at hour 23', function () {
      berlinClock.setTime(23, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('RRRO');
    });

    it('is OOOO at hour 10', function () {
      berlinClock.setTime(10, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('OOOO');
    });

    it('is ROOO at hour 11', function () {
      berlinClock.setTime(11, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('ROOO');
    });

    it('is RROO at hour 12', function () {
      berlinClock.setTime(12, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('RROO');
    });

    it('is RRRO at hour 13', function () {
      berlinClock.setTime(13, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('RRRO');
    });

    it('is RRRR at hour 14', function () {
      berlinClock.setTime(14, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('RRRR');
    });
  });

  describe('five-hour row', function () {
    it('is OOOO at hour 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('OOOO');
    });

    it('is RRRR at hour 23', function () {
      berlinClock.setTime(23, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('RRRR');
    });

    it('is OOOO at hour 4', function () {
      berlinClock.setTime(4, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('OOOO');
    });
  });
});
