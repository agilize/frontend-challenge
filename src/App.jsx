import React, { useState } from 'react';
import CalculationForm from './modules/CalculationForm';
import CalcResult from './modules/CalcResult';
import Header from './modules/Header';
import { Base } from './styles/Base.js';
import Context from './context';
import CalcDetails from './modules/CalcDetails';

function App() {
  const [glossSalary, setGlossSalary] = useState(0);
  const [netSalary, setNetSalary] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [dependents, setDependents] = useState(0);
  const contextValue = {
    setGlossSalary,
    setDiscount,
    setDependents,
    setNetSalary,
    dependents,
    discount,
    glossSalary,
    netSalary,
  };
  return (
    <Context.Provider value={contextValue}>
      <Base>
        <Header />
        <CalculationForm />
        <CalcResult />
        <CalcDetails />
      </Base>
    </Context.Provider>
  );
}

export default App;
