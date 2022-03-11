import { useContext } from 'react';
import SalaryContext from '../../../contexts/SalaryContext';
import calcularINSS from '../../../utils/calcularINSS';
import calcularIRRF from '../../../utils/calcularIRRF';

export default function ButtonCalculator(props) {
  const {
    setSalarioLiquido,
    setPorcentagemIRRF,
    setPorcentagemINSS,
    setTotalDesconto,
    setValorINSS,
    setValorIRRF
  } = useContext(SalaryContext);

  const { salarioBrutoInput, totalDescontoInput, dependentesInput } = props;

  const handleCalcular = () => {
    if (!salarioBrutoInput) return;

    const salarioBrutoINSS = calcularINSS(salarioBrutoInput);
    setPorcentagemINSS(salarioBrutoINSS[1]);

    const salarioBrutoIRRF = calcularIRRF(salarioBrutoInput);
    setPorcentagemIRRF(salarioBrutoIRRF[2]);

    let salarioBaseINSS = 0;

    if (dependentesInput >= 1) {
      const salarioDependente = salarioBrutoInput - (dependentesInput * 189.59);
      const INSS = calcularINSS(salarioDependente)[0];
      setValorINSS(INSS.toFixed(2));
      salarioBaseINSS = salarioDependente - INSS;

    } else {
      const INSS = calcularINSS(salarioBrutoInput)[0];
      setValorINSS(INSS.toFixed(2));
      salarioBaseINSS = salarioBrutoInput - INSS;
    }

      const IRRF =
        (salarioBaseINSS * calcularIRRF(salarioBrutoInput)[0]) - calcularIRRF(salarioBrutoInput)[1];
      setValorIRRF(Math.abs(IRRF).toFixed(2));
      setTotalDesconto(parseFloat(totalDescontoInput).toFixed(2));
      const salarioLiquido = salarioBaseINSS - IRRF - totalDescontoInput;
      
      if (salarioLiquido) setSalarioLiquido(salarioLiquido.toFixed(2));

    
  };

  return (
    <div className="button__main">
      <button onClick={handleCalcular}>CALCULAR</button>
    </div>
  );
}
