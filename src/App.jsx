import React from 'react';
import CalculationForm from './modules/CalculationForm';
import CalcResult from './modules/CalcResult';
import Header from './modules/Header';
import { Base } from './styles/Base.js';

function App() {
  return (
    <Base>
      <Header />
      <CalculationForm />
      <CalcResult />
    </Base>
  );
}

export default App;
