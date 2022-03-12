import React from 'react';
import CalculationForm from './components/CalculationForm';
import Header from './components/Header';
import { Base } from './styles';

function App() {
  return (
    <Base>
      <Header />
      <CalculationForm />
    </Base>
  );
}

export default App;
