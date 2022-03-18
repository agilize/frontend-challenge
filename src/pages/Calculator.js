import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import CalculatorInputs from '../components/Inputs';
import Table from '../components/Table';
import logo from '../assets/logo.png';
import { ButtonCalculate, H1, Img, MainContainerCalculator } from '../styled-components/CalculatorStyle';
import { ButtonClear } from '../styled-components/TableStyle';

function Calculator() {
  const [renderTable, setRenderTable] = useState(false);
  const {
    setBruteSalary,
    setTotalDiscounts,
    setDependentsNumber
  } = useContext(AppContext);

  function clearInputValues() {
    setBruteSalary(0.00);
    setTotalDiscounts(0.00);
    setDependentsNumber(0.00);
    setRenderTable(false);
  }

  return (
    <div>
      <Img src={ logo } alt="logo Agilize"/>
      <H1>Calculadora de salário líquido</H1>
      <MainContainerCalculator>
        <CalculatorInputs name="bruteSalary"/>
        <CalculatorInputs name="totalDiscounts"/>
        <CalculatorInputs name="dependentsNumber" />
        <ButtonCalculate data-testid="btn-calcular" 
          onClick={() => setRenderTable(true) }
        >
          CALCULAR
        </ButtonCalculate>
      </MainContainerCalculator>
      { renderTable && <Table />}
      { 
        renderTable &&
        <ButtonClear 
          data-testid="btn-limpar"
          onClick={ clearInputValues }
        >
          LIMPAR
        </ButtonClear>
      }
      
    </div>
  )
};

export default Calculator;
