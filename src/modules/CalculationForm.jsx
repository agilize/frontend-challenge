import React, { useContext } from 'react';
import Context from '../context';
import { CalculateButton } from '../styles/CalculationForm';
import { deductsINSS, deductsIRRF, twoDecimals } from '../utils';
import DependentsField from './fields/DependentsField';
import ValuesField from './fields/ValuesField';

function CalculationForm() {
  const { dependents, discount, glossSalary, setNetSalary } =
    useContext(Context);
  const calculatesNetSalary = () => {
    const INSSDeduction = deductsINSS(glossSalary);
    const IRRFDeduction = deductsIRRF(glossSalary, INSSDeduction, dependents);
    if (IRRFDeduction > INSSDeduction) {
      setNetSalary(twoDecimals(IRRFDeduction - discount));
    } else {
      setNetSalary(twoDecimals(INSSDeduction - discount));
    }
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
