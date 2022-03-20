import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SalaryContext from './SalaryContext';

function SalaryProvider({ children }) {
  const [salaryValues, setSalaryValues] = useState({});

  const state = useMemo(() => ({ salaryValues, setSalaryValues }));

  return (
    <SalaryContext.Provider value={state}>
      { children }
    </SalaryContext.Provider>
  );
}

SalaryProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default SalaryProvider;
