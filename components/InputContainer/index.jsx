import ButtonCalculator from './ButtonCalculator';
import InputElement from './InputElement';
import SelectDependent from './SelectDependent';
import { useState } from 'react';

export default function InputContainer() {
  const [salarioBruto, setSalarioBruto] = useState('');
  const [totalDesconto, setTotalDesconto] = useState('');
  const [dependentes, setDependente] = useState(0);

  const handleChangeSalarioBruto = (event) => {
    setSalarioBruto(event.target.value);
  };

  const handleChangeTotalDesconto = (event) => {
    setTotalDesconto(event.target.value);
  };

  const handleChangeDepedentes = (event) => {
    setDependentes(event.target.value);
  };

  const incrementarDepedentes = () => {
    setDependente(dependentes + 1);
  };

  const decrementarDepedentes = () => {
    if (dependentes <= 0) {
      return;
    }
    setDependente(dependentes - 1);
  };



  return (
    <div className="input__container">
      <InputElement
        question="Qual seu salário bruto?"
        description="Salário bruto sem descontos"
        handleChange={handleChangeSalarioBruto}
      />
      <InputElement
        question="Total de descontos"
        description="Pensão alimentícia, plano de saúde..."
        handleChange={handleChangeTotalDesconto}
      />
      <SelectDependent
        dependentes={dependentes}
        handleChange={handleChangeDepedentes}
        handleMinus={decrementarDepedentes}
        handleMore={incrementarDepedentes}
      />
      <ButtonCalculator />
    </div>
  );
}
