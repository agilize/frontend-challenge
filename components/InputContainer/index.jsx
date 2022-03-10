import ButtonCalculator from './ButtonCalculator';
import InputElement from './InputElement';
import SelectDependent from './SelectDependent';

export default function InputContainer() {
  return (
    <div className="input__container">
      <InputElement question="Qual seu salário bruto?" description="Salário bruto sem descontos" />
      <InputElement
        question="Total de descontos"
        description="Pensão alimentícia, plano de saúde..."
      />
      <SelectDependent />
      <ButtonCalculator />
    </div>
  );
}
