import React from 'react';
import SalaryInputsEntries from '../../components/SalaryInputsEntries/SalaryInputsEntries';
import SalaryLiquidResult from '../../components/SalaryLiquidResult/SalaryLiquidResult';

import './Home.css';

function Home() {
  return (
    <div className="app">
      <SalaryInputsEntries />
      <SalaryLiquidResult />
    </div>
  );
}

export default Home;
