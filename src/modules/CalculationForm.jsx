import React, { useContext } from 'react';
import Context from '../context';
import { CalculateButton } from '../styles/CalculationForm';
import { deductsINSS, deductsIRRF } from '../utils';
import DependentsField from '../fields/DependentsField';
import ValuesField from '../fields/ValuesField';

function CalculationForm() {
  const { dependents, discount, glossSalary, setCalcInfos } =
    useContext(Context);

  const calculatesNetSalary = () => {
    const INSSDiscount = deductsINSS(glossSalary);

    let netSalary = glossSalary - INSSDiscount - discount;

    const IRRFDiscount = deductsIRRF(glossSalary, netSalary, dependents);

    netSalary = IRRFDiscount > 0 ? netSalary - IRRFDiscount : netSalary;

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
      <CalculateButton
        type='button'
        data-testid='submit-button'
        onClick={calculatesNetSalary}
      >
        CALCULAR
      </CalculateButton>
    </form>
  );
}

export default CalculationForm;
