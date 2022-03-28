import React from 'react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import './styles.css';

function UsedValues() {
  const user = useAppSelector(state => state.user);

  const INSS = user.grossValue * 0.11;
  const IRRF = user.grossValue * 0.275;
  const liquid = user.grossValue - INSS - IRRF;

  return (
    <section className='container-values'>
      <div>
        <p>Como o cálculo é feito ?</p>
      </div>
      <div className='values-area'>
        <div className='values left'>
            <div>Sálario bruto</div>
            <div>INSS (11%)</div>
            <div>IRRF (27.50%)</div>
            <div>Outros descontos</div>
        </div>
        <div className='values right'>
            <div>
              {user.grossValue.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL' 
              })}
            </div>
            <div>
              {INSS.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL' 
              })}
            </div>
            <div>
              {IRRF.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL' 
              })}
            </div>
            <div>

            </div>
        </div>
      </div>
        <div className="sidebar"></div>
      <div className='values-area--end'>
        <div>Salário líquido</div>
        <div>
          {liquid.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL' 
          })}
        </div>
      </div>
    </section>
  )
}

export default UsedValues;
