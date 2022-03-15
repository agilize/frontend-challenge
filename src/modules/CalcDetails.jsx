import React, { useContext } from 'react';
import Context from '../context';
import { convertToReal } from '../utils';
import CalcLine from './fields/components/CalcLine';

const CalcDetails = () => {
  const {
    calcInfos: { glossSalary, netSalary, discount, INSSDiscount, IRRFDiscount },
  } = useContext(Context);

  const INSSPercent = INSSDiscount
    ? convertToReal((INSSDiscount / glossSalary) * 100)
    : 0;

  const IRRFPercent = IRRFDiscount
    ? convertToReal((IRRFDiscount / glossSalary) * 100)
    : 0;

  return (
    <div>
      <div>
        <CalcLine value={glossSalary} title='Salário bruto' />
        <CalcLine value={INSSDiscount} title={`INSS(%${INSSPercent})`} />
        <CalcLine value={IRRFDiscount} title={`IRRF(%${IRRFPercent})`} />
        <CalcLine value={discount} title={`Outros descontos`} />
      </div>
      <CalcLine value={netSalary} title='Salário líquido' />
    </div>
  );
};

export default CalcDetails;
