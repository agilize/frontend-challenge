import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function CalculatorInputs(props) {
  const {
    setBruteSalary,
    setTotalDiscounts,
    dependentsNumber,
    setDependentsNumber,
    bruteSalary,
    totalDiscounts
  } = useContext(AppContext);

  const { name } = props

  function conditionalRender() {
    if (name === "bruteSalary") {
      return (
        <div>
          <label
            htmlFor="bruteSalary"
          >
            Qual seu salário bruto?
          </label>
          <input
            onChange={ ({ target }) => setBruteSalary(target.value) }
            value={ bruteSalary }
            id="bruteSalary"
            data-testid="bruteSalary"
          />
        </div>
      )
    }

    if(name === "totalDiscounts") {
      return (
        <div>
          <label
            htmlFor="totalDiscounts"
          >
            Total de descontos
          </label>
          <input 
            onChange={ ({ target }) => setTotalDiscounts(target.value)}
            value={ totalDiscounts }
            id="totalDiscounts"
            data-testid="totalDiscounts"
          />
        </div>
      )
    }

    if (name === "dependentsNumber") {
      return (
        <div>
          <label
            htmlFor="dependentsNumber"
          >
            Quantos dependentes você tem?
          </label>
          <button
            data-testid="btn-decrement"
            onClick={ () => {
            setDependentsNumber((prevState) => 
              prevState === 0 || prevState === "" ? 0 : prevState - 1
            ) } }
          >
            -
          </button>
          <input
            onChange={ ({ target }) => setDependentsNumber(target.value)}
            value={ dependentsNumber }
            placeholder="0"
            id="dependentsNumber"
            type="number"
            data-testid="dependentsNumber"

          />
          <button
            data-testid="btn-increment"
            onClick={ () => setDependentsNumber((prevState) => Number(prevState) + 1) }
          >
            +
          </button>
        </div>
      )
    }
  }

  const renderInputByName = conditionalRender();

  return (
    renderInputByName
  )
}

export default CalculatorInputs;
