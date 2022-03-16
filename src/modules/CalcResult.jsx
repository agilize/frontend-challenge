import React, { useContext } from 'react';
import Context from '../context';
import { convertToReal } from '../utils';

const CalcResult = () => {
  const {
    calcInfos: { netSalary },
  } = useContext(Context);
  const convertedSalary = convertToReal(`${netSalary}`);
  return (
    <div className='flex items-center'>
      <h2 data-testid='calc-result-title' className='mr-2 text-3xl'>
        Seu salário líquido será
      </h2>
      <div className='flex items-center p-20 bg-circle'>
        <p data-testid='calc-result-symbol' className='text-l'>
          R$
        </p>
        <p
          data-testid='calc-result-value'
          className='ml-2 text-4xl text-calculateGreen'
        >
          {convertedSalary}
        </p>
      </div>
    </div>
  );
};

export default CalcResult;
