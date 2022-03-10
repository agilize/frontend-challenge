import { createContext } from 'react';

export const SalaryContext = createContext({});

const SalaryProvider = ({ children }) => {
  return <SalaryContext.Provider>{children}</SalaryContext.Provider>
  
};

export default SalaryProvider;