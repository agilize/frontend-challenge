import React, { useState } from 'react';
import MoreInfos from './components/MoreInfos';
import PlusCircle from '../../images/plus-circle.png';
import MinusCircle from '../../images/minus-circle.png';
import { DependentesInput } from '../../styles/CalculationForm';

const DependentsField = () => {
  const [dependentsNumb, updateDependentsNumb] = useState(0);
  const updateDependents = (value) => {
    if (value.length < 5) {
      const number = parseInt(value);
      if (Number.isNaN(number)) {
        updateDependentsNumb(0);
      } else {
        updateDependentsNumb(parseInt(value));
      }
    }
  };
  const addDependent = () => {
    if (`${dependentsNumb}`.length < 5)
      updateDependentsNumb(dependentsNumb + 1);
  };
  const removeDependent = () => {
    if (dependentsNumb >= 1) updateDependentsNumb(dependentsNumb - 1);
  };
  return (
    <fieldset>
      <p>Quantos dependentes você tem?</p>
      <div className='flex my-1'>
        <button
          type='button'
          data-testid='dependents-number-add'
          onClick={() => addDependent()}
        >
          <img src={PlusCircle} alt='Símbolo de mais' className='h-5' />
        </button>
        <DependentesInput
          type='text'
          data-testid='dependents-number-input'
          value={dependentsNumb}
          onChange={({ target }) => updateDependents(target.value)}
        />
        <button
          type='button'
          data-testid='dependents-number-remove'
          onClick={() => removeDependent()}
        >
          <img src={MinusCircle} alt='Símbolo de menos' className='h-5' />
        </button>
      </div>

      <MoreInfos>Dependentes declarados no Imposto de Rendas</MoreInfos>
    </fieldset>
  );
};

export default DependentsField;
