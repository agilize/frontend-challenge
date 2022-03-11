
import border from '../../public/imagens/border.png';
import { useContext } from 'react';
import SalaryContext from '../../contexts/SalaryContext';

export default function TotalContainer() {
  const {
    salarioBruto,
    porcentagemINSS,
    porcentagemIRRF,
    salarioLiquido,
    valorINSS,
    valorIRRF,
    totalDesconto,
  } = useContext(SalaryContext);
 
  let salario = parseFloat(salarioBruto).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  return (
    <div className="total__container">
      <div className="total__title-resume">
        <h1>Seu salário líquido será</h1>
        <div className="total__title-total">
          <img src={border.src} alt="" />
          <div className="total__title-totaltext">
            <h3>R$</h3>
            <h2>{salarioLiquido}</h2>
          </div>
        </div>
      </div>

      <div className="total__title-complete">
        <h1>Como o cálculo é feito?</h1>
        <div>
          <div>
            <p>Salário bruto</p>
            {salario !== 'NaN' ? <p>R$ {salario}</p> : <p>R$ 0,00</p>}
          </div>

          <div>
            <p>INSS({porcentagemINSS}%)</p>

            <p>R$ {valorINSS}</p>
          </div>

          <div>
            <p>IRRF({porcentagemIRRF}%)</p>
            <p>R$ {valorIRRF}</p>
          </div>

          <div>
            <p>Outros descontos</p>
            <p>R$ {totalDesconto}</p>
          </div>
          <hr />

          <div>
            <p>Salário líquido</p>
            <p>R$ {salarioLiquido}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
