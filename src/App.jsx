import React, { useState } from 'react';
import CalculationForm from './modules/CalculationForm';
import CalcResult from './modules/CalcResult';
import Header from './modules/Header';
import { Base } from './styles/Base.js';
import Context from './context';
import CalcDetails from './modules/CalcDetails';

const defaultCalcInfos = {
  glossSalary: 0,
  discount: 0,
  INSSDiscount: 0,
  IRRFDiscount: 0,
  netSalary: 0,
};

function App() {
  const [glossSalary, setGlossSalary] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [dependents, setDependents] = useState(0);
  const [calcInfos, setCalcInfos] = useState(defaultCalcInfos);

  const contextValue = {
    setGlossSalary,
    setDiscount,
    setDependents,
    setCalcInfos,
    dependents,
    discount,
    glossSalary,
    calcInfos,
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
