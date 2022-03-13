import React from 'react';
import MoreInfos from './components/MoreInfos';
import ValueInput from './components/ValueInput';

const ValuesField = () => {
  return (
    <fieldset className='flex'>
      <label>
        <p>Qual seu salário bruto?</p>
        <ValueInput testId='gross-salary-input' />
        <MoreInfos>Salário bruto sem descontos</MoreInfos>
      </label>
      <label className='mx-10'>
        <p>Total de descontos</p>
        <ValueInput testId='total-discount-input' />
        <MoreInfos>Pensão alimentícia, plano de saúde...</MoreInfos>
      </label>
    </fieldset>
  );
};

export default ValuesField;
