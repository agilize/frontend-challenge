import { useEffect, useState } from 'react';
import SalaryContext from './SalaryContext';

const SalaryWrapper = ({ children }) => {
  const [salarioBruto, setSalarioBruto] = useState(0);
  const [salarioBase, setSalarioBase] = useState(0);
  const [totalDesconto, setTotalDesconto] = useState(0);
  const [dependentes, setDependente] = useState(0);
  const [salarioLiquido, setSalarioLiquido] = useState('');
  const [valorINSS, setValorINSS] = useState(0);
  const [valorIRRF, setValorIRRF] = useState(0);
  const [porcentagemINSS, setPorcentagemINSS] = useState(0);
  const [porcentagemIRRF, setPorcentagemIRRF] = useState(0);

  return (
    <SalaryContext.Provider
      value={{
        valorINSS,
        setValorINSS,
        valorIRRF,
        setValorIRRF,
        salarioBruto,
        setSalarioBruto,
        salarioBase,
        setSalarioBase,
        totalDesconto,
        setTotalDesconto,
        dependentes,
        setDependente,
        salarioLiquido,
        setSalarioLiquido,
        porcentagemINSS,
        setPorcentagemINSS,
        porcentagemIRRF,
        setPorcentagemIRRF,
      }}
    >
      {children}
    </SalaryContext.Provider>
  );
};

export default SalaryWrapper;