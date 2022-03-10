import InputElement from './InputElement';
import SelectDependent from './SelectDependent';

export default function InputContainer() {
  return (
    <div className="input__container">
      <InputElement question="Qual seu salario bruto?" description="Salario bruto sem descontos" />
      <InputElement question="Total de descontos" description="Pensao alimenticia, plano de saude..." />
      <SelectDependent />
    </div>
  );
}
