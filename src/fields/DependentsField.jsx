import React, { useContext } from 'react';
import MoreInfos from '../components/MoreInfos';
import PlusCircle from '../images/plus-circle.png';
import MinusCircle from '../images/minus-circle.png';
import Context from '../context';

const DependentsField = () => {
  const { dependents, setDependents } = useContext(Context);
  const updateDependents = (value) => {
    if (value.length < 5) {
      const number = parseInt(value);
      if (Number.isNaN(number)) {
        setDependents(0);
      } else {
        setDependents(parseInt(value));
      }
    }
  };
  const addDependent = () => {
    if (`${dependents}`.length < 5) setDependents(dependents + 1);
  };
  const removeDependent = () => {
    if (dependents >= 1) setDependents(dependents - 1);
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
        <input
          className='w-16 p-2 mx-1 text-center text-gray-800 rounded-full'
          type='text'
          data-testid='dependents-number-input'
          value={dependents}
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
