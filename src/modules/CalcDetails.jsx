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
      <h3 className='mb-6 text-center'>Como o cálculo é feito?</h3>
      <div className='border-b'>
        <CalcLine
          value={`R$${convertToReal(glossSalary)}`}
          title='Salário bruto'
        />
        <CalcLine
          value={`- R$${convertToReal(INSSDiscount)}`}
          title={`INSS(${INSSPercent}%)`}
        />
        <CalcLine
          value={`- R$${convertToReal(IRRFDiscount)}`}
          title={`IRRF(${IRRFPercent}%)`}
        />
        <CalcLine
          value={`- R$${convertToReal(discount)}`}
          title={`Outros descontos`}
        />
      </div>
      <CalcLine
        value={`R$${convertToReal(netSalary)}`}
        title='Salário líquido'
      />
    </div>
  );
};

export default CalcDetails;
