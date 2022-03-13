import React from 'react';
import CalculationForm from './modules/CalculationForm';
import Header from './modules/Header';
import { Base } from './styles/Base.js';

function App() {
  return (
    <Base>
      <Header />
      <CalculationForm />
    </Base>
  );
}

export default App;
