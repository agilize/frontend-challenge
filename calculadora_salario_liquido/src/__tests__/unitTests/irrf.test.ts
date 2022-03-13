import { getIRRFdiscount, getIRRFAliquot } from '../../utils/irrf';
import {
  firstRange,
  secondRange,
  thirdRange,
  fourthRange,
  fifthRange,
} from '../mocks/irrfDummie.json';

describe('tests the inss calculation functions', () => {
  describe('getIRRFAliquot', () => {
    const aliquots = [0, 7.5, 15, 22.5, 27.5];
    const salarys = [1903.98, 2826.65, 3751.05, 4664.68, 4664.69];

    it('tests if the correct rate is returned for each salary', () => {
      for (let index = 0; index < aliquots.length; index += 1) {
        const result = getIRRFAliquot(salarys[index]);

        expect(result).toBe(aliquots[index]);
      }
    });
  });

  describe('getIRRFdiscount', () => {
    describe('tests the firstRange of irrf table', () => {
      it('without discounts and dependents', () => {
        const result = getIRRFdiscount(
          firstRange[0].salary,
          firstRange[0].discount,
          firstRange[0].dependents,
          firstRange[0].INSSdiscount
        );

        expect(result).toBe(0);
      });
    });

    describe('tests the secondRange of irrf table', () => {
      it('without discounts and dependents', () => {
        const result = getIRRFdiscount(
          secondRange[0].salary,
          secondRange[0].discount,
          secondRange[0].dependents,
          secondRange[0].INSSdiscount
        );

        expect(result).toBe(55.54);
      });

      it('with discounts and without dependents', () => {
        const result = getIRRFdiscount(
          secondRange[1].salary,
          secondRange[1].discount,
          secondRange[1].dependents,
          secondRange[1].INSSdiscount
        );

        expect(result).toBe(40.54);
      });

      it('without discounts and with 1 dependents', () => {
        const result = getIRRFdiscount(
          secondRange[2].salary,
          secondRange[2].discount,
          secondRange[2].dependents,
          secondRange[2].INSSdiscount
        );

        expect(result).toBe(41.32);
      });

      it('with discounts and with 1 dependents', () => {
        const result = getIRRFdiscount(
          secondRange[3].salary,
          secondRange[3].discount,
          secondRange[3].dependents,
          secondRange[3].INSSdiscount
        );

        expect(result).toBe(26.32);
      });
    });

    describe('tests the thirdRange of irrf table', () => {
      it('without discounts and dependents', () => {
        const result = getIRRFdiscount(
          thirdRange[0].salary,
          thirdRange[0].discount,
          thirdRange[0].dependents,
          thirdRange[0].INSSdiscount
        );

        expect(result).toBe(153.65);
      });

      it('with discounts and without dependents', () => {
        const result = getIRRFdiscount(
          thirdRange[1].salary,
          thirdRange[1].discount,
          thirdRange[1].dependents,
          thirdRange[1].INSSdiscount
        );

        expect(result).toBe(123.65);
      });

      it('without discounts and with dependents', () => {
        const result = getIRRFdiscount(
          thirdRange[2].salary,
          thirdRange[2].discount,
          thirdRange[2].dependents,
          thirdRange[2].INSSdiscount
        );

        expect(result).toBe(125.22);
      });

      it('with discounts and with dependents', () => {
        const result = getIRRFdiscount(
          thirdRange[3].salary,
          thirdRange[3].discount,
          thirdRange[3].dependents,
          thirdRange[3].INSSdiscount
        );

        expect(result).toBe(95.22);
      });
    });

    describe('tests the fourthRange of irrf table', () => {
      it('without discounts and dependents', () => {
        const result = getIRRFdiscount(
          fourthRange[0].salary,
          fourthRange[0].discount,
          fourthRange[0].dependents,
          fourthRange[0].INSSdiscount
        );

        expect(result).toBe(303.34);
      });

      it('with discounts and without dependents', () => {
        const result = getIRRFdiscount(
          fourthRange[1].salary,
          fourthRange[1].discount,
          fourthRange[1].dependents,
          fourthRange[1].INSSdiscount
        );

        expect(result).toBe(258.34);
      });

      it('without discounts and with 1 dependents', () => {
        const result = getIRRFdiscount(
          fourthRange[2].salary,
          fourthRange[2].discount,
          fourthRange[2].dependents,
          fourthRange[2].INSSdiscount
        );

        expect(result).toBe(260.68);
      });

      it('with discounts and with dependents', () => {
        const result = getIRRFdiscount(
          fourthRange[3].salary,
          fourthRange[3].discount,
          fourthRange[3].dependents,
          fourthRange[3].INSSdiscount
        );

        expect(result).toBe(215.68);
      });
    });

    describe('tests the fifthRange of irrf table', () => {
      it('without discounts and dependents', () => {
        const result = getIRRFdiscount(
          fifthRange[0].salary,
          fifthRange[0].discount,
          fifthRange[0].dependents,
          fifthRange[0].INSSdiscount
        );

        expect(result).toBe(712.94);
      });

      it('with discounts and without dependents', () => {
        const result = getIRRFdiscount(
          fifthRange[1].salary,
          fifthRange[1].discount,
          fifthRange[1].dependents,
          fifthRange[1].INSSdiscount
        );

        expect(result).toBe(657.94);
      });
      it('without discounts and with dependents', () => {
        const result = getIRRFdiscount(
          fifthRange[2].salary,
          fifthRange[2].discount,
          fifthRange[2].dependents,
          fifthRange[2].INSSdiscount
        );

        expect(result).toBe(660.8);
      });

      it('with discounts and with dependents', () => {
        const result = getIRRFdiscount(
          fifthRange[3].salary,
          fifthRange[3].discount,
          fifthRange[3].dependents,
          fifthRange[3].INSSdiscount
        );

        expect(result).toBe(605.8);
      });
    });
  });
});
