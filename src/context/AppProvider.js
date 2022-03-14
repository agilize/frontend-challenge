import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [bruteSalary, setBruteSalary] = useState();
  const [totalDiscounts, setTotalDiscounts] = useState();
  const [dependentsNumber, setDependentsNumber] = useState(0);

  const contextValue = {
    bruteSalary,
    setBruteSalary,
    totalDiscounts,
    setTotalDiscounts,
    dependentsNumber,
    setDependentsNumber
  }

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
