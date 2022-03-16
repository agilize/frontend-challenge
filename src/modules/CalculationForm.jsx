import React, { useContext } from 'react';
import Context from '../context';
import { deductsINSS, deductsIRRF } from '../utils';
import DependentsField from '../fields/DependentsField';
import ValuesField from '../fields/ValuesField';

function CalculationForm() {
  const { dependents, discount, glossSalary, setCalcInfos } =
    useContext(Context);

  const calculatesNetSalary = () => {
    const INSSDiscount = deductsINSS(glossSalary);

    let netSalary = glossSalary - INSSDiscount;

    const IRRFDiscount = deductsIRRF(glossSalary, netSalary, dependents);

    netSalary =
      IRRFDiscount > 0
        ? netSalary - discount - IRRFDiscount
        : netSalary - discount;

    const calcInfos = {
      glossSalary,
      discount,
      INSSDiscount,
      IRRFDiscount,
      netSalary,
    };

    setCalcInfos(calcInfos);
  };

  return (
    <form className='flex items-center m-10'>
      <ValuesField />
      <DependentsField />
      <button
        className='h-12 px-6 ml-10 text-black rounded-full bg-calculateGreen'
        type='button'
        data-testid='submit-button'
        onClick={calculatesNetSalary}
      >
        CALCULAR
      </button>
    </form>
  );
}

export default CalculationForm;
