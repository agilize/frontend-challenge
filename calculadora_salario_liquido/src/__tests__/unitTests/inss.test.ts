import { getINSSaliquot, getINSSdiscount } from '../../utils/inss';

const firstRange = 1212;
const secondRange = 2427.35;
const thirdRange = 3641.03;
const fourthRange = 7087.22;

describe('tests the inss calculation functions', () => {
  describe('getINSSdiscount', () => {
    it('tests the range up to R$ 1212,00', () => {
      const result = getINSSdiscount(firstRange);

      expect(result).toBe(90.89);
    });

    it('tests the range up to R$ 2.427,35', () => {
      const result = getINSSdiscount(secondRange);

      expect(result).toBe(200.28);
    });

    it('tests the range up to R$ 3.641,03', () => {
      const result = getINSSdiscount(thirdRange);

      expect(result).toBe(345.92);
    });

    it('tests the range up to R$ 7.087,22', () => {
      const result = getINSSdiscount(fourthRange);

      expect(result).toBe(828.38);
    });
  });

  describe('getINSSaliquot', () => {
    it('tests if the rate of 7.5% returns', () => {
      const result = getINSSaliquot(firstRange);

      expect(result).toBe(7.5);
    });

    it('tests if the rate of 9% returns', () => {
      const result = getINSSaliquot(secondRange);

      expect(result).toBe(9);
    });

    it('tests if the rate of 12% returns', () => {
      const result = getINSSaliquot(thirdRange);

      expect(result).toBe(12);
    });

    it('tests if the rate of 14% returns', () => {
      const result = getINSSaliquot(fourthRange);

      expect(result).toBe(14);
    });
  });
});
