import React, { useState, useContext } from 'react';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import MaskedInput from 'react-text-mask';

import calculateLiquidSalary from '../../utils/functions/calculateLiquidSalary';

import SalaryContext from '../../context/SalaryContext';

import logo from '../../assets/logo.png';
import questionMark from '../../assets/Vector.svg';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';

import './SalaryInputsEntries.css';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
};

function SalaryInputsEntries() {
  const [dependentsValue, setDependentsValue] = useState(0);
  const [discountValue, setdiscountValue] = useState('');
  const [grossSalaryValue, setgrossSalaryValue] = useState('');

  const [unlockDoubtDependents, setUnlockDoubtDependents] = useState(false);
  const [unlockDoubtDiscount, setUnlockDoubtDiscount] = useState(false);
  const [unlockDoubtSalary, setUnlockDoubtSalary] = useState(false);

  const { setSalaryValues } = useContext(SalaryContext);

  const currencyMask = createNumberMask(defaultMaskOptions);

  function dependentsHandleChange({ target }) {
    const typeInputDictionary = {
      dependents: () => {
        const currentValue = Number((target.value).replace('-', ''));

        if (currentValue <= 999) setDependentsValue(currentValue);
      },
      plus: () => {
        const currentValue = dependentsValue + 1;

        if (currentValue <= 999) setDependentsValue(currentValue);
      },
      minus: () => {
        const currentValue = dependentsValue - 1;

        if (currentValue >= 0) setDependentsValue(currentValue);
      },
    };

    typeInputDictionary[target.id]();
  }

  function handleChange({ target }) {
    const currentValue = (target.value).replace('-', '');

    const updateStateDictionary = {
      'gross-salary': () => {
        setgrossSalaryValue(currentValue);
      },
      'total-discount': () => {
        setdiscountValue(currentValue);
      },
    };

    updateStateDictionary[target.id]();
  }

  function calculateHandleClick() {
    const grossSalary = Number(grossSalaryValue.replace('.', '').replace(',', '.'));
    const discount = Number(discountValue.replace('.', '').replace(',', '.'));

    const salaryResult = calculateLiquidSalary(grossSalary, dependentsValue, discount);

    setSalaryValues(salaryResult);
  }

  return (
    <div className="salary-inputs-entries-wrap">
      <img className="logo" src={logo} alt="logo da empresa" />
      <h1>Calculadora de salário líquido</h1>

      <div className="inputs-wrap">
        <div>
          <label className="prefix" htmlFor="gross-salary">
            Qual seu salário bruto?
            <MaskedInput
              placeholder="0,00"
              mask={currencyMask}
              onChange={handleChange}
              value={grossSalaryValue}
              id="gross-salary"
              type="text"
            />
          </label>

          <span className="doubt-span">
            { unlockDoubtSalary
            && (
            <div
              className="modal"
            >
              Salário registrado na carteira de trabalho,
              remuneração que um trabalhador recebe
              <br />
              por mês, sem considerar os descontos oficiais obrigatórios.
            </div>
            )}
            <img
              onMouseOut={() => setUnlockDoubtSalary(false)}
              onMouseOver={() => setUnlockDoubtSalary(true)}
              src={questionMark}
              alt="questionMark"
            />
            Salário bruto sem descontos
          </span>
        </div>

        <div>
          <label className="prefix" htmlFor="total-discount">
            Total de descontos
            <MaskedInput
              placeholder="0,00"
              mask={currencyMask}
              onChange={handleChange}
              value={discountValue}
              id="total-discount"
              type="number"
            />
          </label>

          <span className="doubt-span">
            { unlockDoubtDiscount
            && (
            <div
              className="modal"
            >
              Descontos não oficiais e obrigatórios.
              <br />
              Descontos alternativos acordados com a sua empresa ou
              <br />
              determinação jurídica específca como pensão alimentícia.
            </div>
            )}
            <img
              onMouseOut={() => setUnlockDoubtDiscount(false)}
              onMouseOver={() => setUnlockDoubtDiscount(true)}
              src={questionMark}
              alt="questionMark"
            />
            Pensão alimentícia, plano de saúde...
          </span>
        </div>

        <div>
          <label htmlFor="dependents">
            Quantos dependentes você tem?
            <div id="dependents-input-wrap">
              <button
                onClick={dependentsHandleChange}
                className="dependentsButton"
                type="button"
              >
                <img id="minus" src={minus} alt="minus" />
              </button>
              <input
                value={dependentsValue}
                onChange={dependentsHandleChange}
                id="dependents"
                type="number"
              />
              <button
                onClick={dependentsHandleChange}
                className="dependentsButton"
                type="button"
              >
                <img id="plus" src={plus} alt="plus" />
              </button>
            </div>
          </label>

          <span className="doubt-span">
            { unlockDoubtDependents
            && (
            <div
              className="modal"
            >
              Pessoa da qual o trabalhador seja tutor ou curador.
              <br />
              Pessoa que pode ser incluída no Imposto de Renda do trabalhador como dependente.
            </div>
            )}

            <img
              onMouseOut={() => setUnlockDoubtDependents(false)}
              onMouseOver={() => setUnlockDoubtDependents(true)}
              src={questionMark}
              alt="questionMark"
            />
            Dependentes declarados no Imposto de Renda
          </span>
        </div>

        <button onClick={calculateHandleClick} type="button" className="calculate">CALCULAR</button>
      </div>

    </div>
  );
}

export default SalaryInputsEntries;
