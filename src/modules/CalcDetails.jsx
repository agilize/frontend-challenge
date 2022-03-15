import React, { useContext } from 'react';
import Context from '../context';
import CalcLine from './fields/components/CalcLine';

const CalcDetails = () => {
  const { glossSalary, netSalary } = useContext(Context);
  return (
    <div>
      <div>
        <CalcLine value={glossSalary} title='Salário bruto' />
        <CalcLine value={glossSalary} title='INSS()' />
        <CalcLine value={glossSalary} title='IRRF()' />
        <CalcLine value={glossSalary} title='Outros descontos' />
      </div>
      <CalcLine value={netSalary} title='Salário líquido' />
    </div>
  );
};

export default CalcDetails;
