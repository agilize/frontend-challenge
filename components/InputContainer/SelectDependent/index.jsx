import retangulo from '../../../public/imagens/retangulo.svg';
import { AiOutlineQuestionCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

export default function SelectDependent() {
  return (
    <div className="select__main">
      <strong>Quantos depententes voce tem?</strong>
      <div className="select__group">
        <AiOutlineMinusCircle className="select__icon" />

        <input type="text" placeholder="0" />
        <AiOutlinePlusCircle className="select__icon" />
      </div>
      <div className="select__description">
        <AiOutlineQuestionCircle className="select__icon" />
        <p>Dependentes declarados no Imposto de Renda</p>
      </div>
    </div>
  );
}
