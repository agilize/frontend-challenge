import ButtonCalculator from './ButtonCalculator';
import retangulo from '../../public/imagens/retangulo.svg';
import { AiOutlineQuestionCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import CurrencyInput from 'react-currency-input-field';
import { useState } from 'react';

export default function InputContainer() {
  const [salarioBrutoInput, setSalarioBrutoInput] = useState(0);
  const [totalDescontoInput, setTotalDescontoInput] = useState(0);
  const [dependentesInput, setDependentesInput] = useState(0);

  const handleChangeSalarioBruto = (event) => {
    setSalarioBrutoInput(event);
  };

  const handleChangeTotalDesconto = (event) => {
    setTotalDescontoInput(event);
  };

   function handleChangeDepedentes(event) {
     setDependentesInput(event.target.value);
   }

   const incrementarDepedentes = () => {
     setDependentesInput(dependentesInput + 1);
   };

   const decrementarDepedentes = () => {
     if (dependentesInput <= 0) {
       return;
     }
     setDependentesInput(dependentesInput - 1);
   };

  return (
    <div className="input__container">
      <div className="input__main">
        <strong>Qual seu salário bruto?</strong>
        <div className="input__group">
          <p>R$</p>
          <img src={retangulo.src} alt="search" className="search__icon"></img>
          {/* <input type="text" placeholder="0,00" onChange={handleChangeSalarioBruto} /> */}
          <CurrencyInput
            id="input-salario-bruto"
            decimalSeparator=","
            groupSeparator="."
            placeholder="0,00"
            decimalsLimit={2}
            onValueChange={handleChangeSalarioBruto}
          />
          ;
        </div>
        <div className="input__description">
          <AiOutlineQuestionCircle className="input__icon" />
          <p>Salário bruto sem descontos</p>
        </div>
      </div>

      <div className="input__main">
        <strong>Total de descontos</strong>
        <div className="input__group">
          <p>R$</p>
          <img src={retangulo.src} alt="search" className="search__icon"></img>
          {/* <input type="text" placeholder="0,00" onChange={handleChangeTotalDesconto} /> */}
          <CurrencyInput
            id="input-salario-desconto"
            decimalSeparator=","
            groupSeparator="."
            placeholder="0,00"
            decimalsLimit={2}
            onValueChange={handleChangeTotalDesconto}
          />
        </div>
        <div className="input__description">
          <AiOutlineQuestionCircle className="input__icon" />
          <p>Pensão alimentícia, plano de saúde...</p>
        </div>
      </div>

      <div className="select__main">
        <strong>Quantos dependentes voce tem?</strong>
        <div className="select__group">
          <AiOutlineMinusCircle className="select__icon" onClick={decrementarDepedentes} />

          <input readOnly type="text" value={dependentesInput} placeholder="0,00" />
          <AiOutlinePlusCircle className="select__icon" onClick={incrementarDepedentes} />
        </div>
        <div className="select__description">
          <AiOutlineQuestionCircle className="select__icon" />
          <p>Dependentes declarados no Imposto de Renda</p>
        </div>
      </div>

      <ButtonCalculator
        salarioBrutoInput={salarioBrutoInput}
        totalDescontoInput={totalDescontoInput}
        dependentesInput={dependentesInput}
      />
    </div>
  );
}
