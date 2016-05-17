var BerlinClock = require('../lib/BerlinClock');

describe('Berlin Clock', function () {
  var berlinClock;

  beforeEach(function () {
    berlinClock = new BerlinClock();
  });

  describe('one-minute row', function () {
    it('is 0000 at minute 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.oneMinuteRow()).toBe('0000');
    });

    it('is 1111 at minute 59', function () {
      berlinClock.setTime(0, 59, 0);
      expect(berlinClock.oneMinuteRow()).toBe('1111');
    });

    it('is 0000 at minute 10', function () {
      berlinClock.setTime(0, 10, 0);
      expect(berlinClock.oneMinuteRow()).toBe('0000');
    });

    it('is 1000 at minute 11', function () {
      berlinClock.setTime(0, 11, 0);
      expect(berlinClock.oneMinuteRow()).toBe('1000');
    });

    it('is 1100 at minute 12', function () {
      berlinClock.setTime(0, 12, 0);
      expect(berlinClock.oneMinuteRow()).toBe('1100');
    });

    it('is 1110 at minute 13', function () {
      berlinClock.setTime(0, 13, 0);
      expect(berlinClock.oneMinuteRow()).toBe('1110');
    });

    it('is 1111 at minute 14', function () {
      berlinClock.setTime(0, 14, 0);
      expect(berlinClock.oneMinuteRow()).toBe('1111');
    });
  });

  describe('five-minute row', function () {
    it('is 00000000000 at minute 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('00000000000');
    });

    it('is 11111111111 at minute 59', function () {
      berlinClock.setTime(0, 59, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('11111111111');
    });

    it('is 00000000000 at minute 4', function () {
      berlinClock.setTime(0, 4, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('00000000000');
    });

    it('is 10000000000 at minute 5', function () {
      berlinClock.setTime(0, 5, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('10000000000');
    });

    it('is 11111100000 at minute 30', function () {
      berlinClock.setTime(0, 30, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('11111100000');
    });

    it('is 11111111110 at minute 54', function () {
      berlinClock.setTime(0, 54, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('11111111110');
    });

    it('is 11111111111 at minute 55', function () {
      berlinClock.setTime(0, 55, 0);
      expect(berlinClock.fiveMinuteRow()).toBe('11111111111');
    });
  });

  describe('one-hour row', function () {
    it('is 0000 at hour 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('0000');
    });

    it('is 1110 at hour 23', function () {
      berlinClock.setTime(23, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('1110');
    });

    it('is 0000 at hour 10', function () {
      berlinClock.setTime(10, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('0000');
    });

    it('is 1000 at hour 11', function () {
      berlinClock.setTime(11, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('1000');
    });

    it('is 1100 at hour 12', function () {
      berlinClock.setTime(12, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('1100');
    });

    it('is 1110 at hour 13', function () {
      berlinClock.setTime(13, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('1110');
    });

    it('is 1111 at hour 14', function () {
      berlinClock.setTime(14, 0, 0);
      expect(berlinClock.oneHourRow()).toBe('1111');
    });
  });

  describe('five-hour row', function () {
    it('is 0000 at hour 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('0000');
    });

    it('is 1111 at hour 23', function () {
      berlinClock.setTime(23, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('1111');
    });

    it('is 0000 at hour 4', function () {
      berlinClock.setTime(4, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('0000');
    });

    it('is 1000 at hour 5', function () {
      berlinClock.setTime(5, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('1000');
    });

    it('is 1100 at hour 12', function () {
      berlinClock.setTime(12, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('1100');
    });

    it('is 1110 at hour 19', function () {
      berlinClock.setTime(19, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('1110');
    });

    it('is 1111 at hour 20', function () {
      berlinClock.setTime(20, 0, 0);
      expect(berlinClock.fiveHourRow()).toBe('1111');
    });
  });

  describe('seconds lamp', function () {
    it('is 1 at second 0', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.secondsLamp()).toBe('1');
    });

    it('is 0 at second 59', function () {
      berlinClock.setTime(0, 0, 59);
      expect(berlinClock.secondsLamp()).toBe('0');
    });
  });

  describe('composite row', function () {
    it('is 100000000000000000000000 at 00:00:00', function () {
      berlinClock.setTime(0, 0, 0);
      expect(berlinClock.compositeRow()).toBe('100000000000000000000000');
    });

    it('is 011111110111111111111111 at 23:59:59', function () {
      berlinClock.setTime(23, 59, 59);
      expect(berlinClock.compositeRow()).toBe('011111110111111111111111');
    });
  });
});
