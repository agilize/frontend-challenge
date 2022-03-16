import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import CalculatorInputs from '../components/Inputs';
import Table from '../components/Table';

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
      <CalculatorInputs name="bruteSalary"/>
      <CalculatorInputs name="totalDiscounts"/>
      <CalculatorInputs name="dependentsNumber" />
      <button name="Calcular" onClick={() => setRenderTable(true) }>Calcular</button>
      <button name="Limpar" onClick={ clearInputValues }>Limpar</button>
      {
        renderTable &&
        <Table />
      }
    </div>
  )
};

export default Calculator;
