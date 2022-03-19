import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [bruteSalary, setBruteSalary] = useState(0.00);
  const [totalDiscounts, setTotalDiscounts] = useState(0.00);
  const [dependentsNumber, setDependentsNumber] = useState(0.00);

  
  const contextValue = {
    bruteSalary,
    setBruteSalary,
    totalDiscounts,
    setTotalDiscounts,
    dependentsNumber,
    setDependentsNumber,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
