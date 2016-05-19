var BerlinClock = require('../lib/BerlinClock');

describe('Berlin Clock', function () {
  describe('seconds lamp', function () {
    it('is 1 at second 0', function () {
      expect(BerlinClock.secondsLamp(0)).toBe('1');
    });

    it('is 0 at second 59', function () {
      expect(BerlinClock.secondsLamp(59)).toBe('0');
    });
  });

  describe('five-hour row', function () {
    it('is 0000 at hour 0', function () {
      expect(BerlinClock.fiveHourRow(0)).toBe('0000');
    });

    it('is 1111 at hour 23', function () {
      expect(BerlinClock.fiveHourRow(23)).toBe('1111');
    });

    it('is 0000 at hour 4', function () {
      expect(BerlinClock.fiveHourRow(4)).toBe('0000');
    });

    it('is 1000 at hour 5', function () {
      expect(BerlinClock.fiveHourRow(5)).toBe('1000');
    });

    it('is 1100 at hour 12', function () {
      expect(BerlinClock.fiveHourRow(12)).toBe('1100');
    });

    it('is 1110 at hour 19', function () {
      expect(BerlinClock.fiveHourRow(19)).toBe('1110');
    });

    it('is 1111 at hour 20', function () {
      expect(BerlinClock.fiveHourRow(20)).toBe('1111');
    });
  });

  describe('one-hour row', function () {
    it('is 0000 at hour 0', function () {
      expect(BerlinClock.oneHourRow(0)).toBe('0000');
    });

    it('is 1110 at hour 23', function () {
      expect(BerlinClock.oneHourRow(23)).toBe('1110');
    });

    it('is 0000 at hour 10', function () {
      expect(BerlinClock.oneHourRow(10)).toBe('0000');
    });

    it('is 1000 at hour 11', function () {
      expect(BerlinClock.oneHourRow(11)).toBe('1000');
    });

    it('is 1100 at hour 12', function () {
      expect(BerlinClock.oneHourRow(12)).toBe('1100');
    });

    it('is 1110 at hour 13', function () {
      expect(BerlinClock.oneHourRow(13)).toBe('1110');
    });

    it('is 1111 at hour 14', function () {
      expect(BerlinClock.oneHourRow(14)).toBe('1111');
    });
  });

  describe('five-minute row', function () {
    it('is 00000000000 at minute 0', function () {
      expect(BerlinClock.fiveMinuteRow(0)).toBe('00000000000');
    });

    it('is 11111111111 at minute 59', function () {
      expect(BerlinClock.fiveMinuteRow(59)).toBe('11111111111');
    });

    it('is 00000000000 at minute 4', function () {
      expect(BerlinClock.fiveMinuteRow(4)).toBe('00000000000');
    });

    it('is 10000000000 at minute 5', function () {
      expect(BerlinClock.fiveMinuteRow(5)).toBe('10000000000');
    });

    it('is 11111100000 at minute 30', function () {
      expect(BerlinClock.fiveMinuteRow(30)).toBe('11111100000');
    });

    it('is 11111111110 at minute 54', function () {
      expect(BerlinClock.fiveMinuteRow(54)).toBe('11111111110');
    });

    it('is 11111111111 at minute 55', function () {
      expect(BerlinClock.fiveMinuteRow(55)).toBe('11111111111');
    });
  });

  describe('one-minute row', function () {
    it('is 0000 at minute 0', function () {
      expect(BerlinClock.oneMinuteRow(0)).toBe('0000');
    });

    it('is 1111 at minute 59', function () {
      expect(BerlinClock.oneMinuteRow(59)).toBe('1111');
    });

    it('is 0000 at minute 10', function () {
      expect(BerlinClock.oneMinuteRow(10)).toBe('0000');
    });

    it('is 1000 at minute 11', function () {
      expect(BerlinClock.oneMinuteRow(11)).toBe('1000');
    });

    it('is 1100 at minute 12', function () {
      expect(BerlinClock.oneMinuteRow(12)).toBe('1100');
    });

    it('is 1110 at minute 13', function () {
      expect(BerlinClock.oneMinuteRow(13)).toBe('1110');
    });

    it('is 1111 at minute 14', function () {
      expect(BerlinClock.oneMinuteRow(14)).toBe('1111');
    });
  });

  describe('composite row', function () {
    it('is 100000000000000000000000 at 00:00:00', function () {
      var compositeRow = BerlinClock.compositeRow(0, 0, 0);
      expect(compositeRow).toBe('100000000000000000000000');
    });

    it('is 011111110111111111111111 at 23:59:59', function () {
      var compositeRow = BerlinClock.compositeRow(23, 59, 59);
      expect(compositeRow).toBe('011111110111111111111111');
    });
  });
});
