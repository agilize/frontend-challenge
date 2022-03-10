
import border from '../../public/imagens/border.png';

export default function TotalContainer() {
  return (
    <div className="total__container">
      <div className="total__title-resume">
        <h1>Seu salário líquido será</h1>
        <div className="total__title-total">
          <img src={border.src} alt="" />
          <div className="total__title-totaltext">
            <h3>R$</h3>
            <h2>2000</h2>
          </div>
        </div>
      </div>

      <div className="total__title-complete">
        <h1>Como o cálculo é feito?</h1>
        <div>
          <div>
            <p>Salário bruto</p>
            <p>R$ 2.800,00</p>
          </div>

          <div>
            <p>INSS(11%)</p>

            <p>R$ 2.800,00</p>
          </div>

          <div>
            <p>IRRF(27.50%)</p>
            <p>R$ 2.800,00</p>
          </div>

          <div>
            <p>Outros descontos</p>
            <p>R$ 2.800,00</p>
          </div>
        </div>
        <hr />
        <div>
          <p>Salário líquido</p>
          <p>R$ 2.800,00</p>
        </div>
      </div>
    </div>
  );
}
