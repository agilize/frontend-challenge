import { useState } from 'react';
import { AiOutlineQuestionCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

export default function SelectDependent(props) {
  const { handleChange, handleMore, handleMinus, dependentes } = props;

  return (
    <div className="select__main">
      <strong>Quantos dependentes voce tem?</strong>
      <div className="select__group">
        <AiOutlineMinusCircle className="select__icon" onClick={handleMinus} />

        <input type="text" onChange={handleChange} value={dependentes} />
        <AiOutlinePlusCircle className="select__icon" onClick={handleMore} />
      </div>
      <div className="select__description">
        <AiOutlineQuestionCircle className="select__icon" />
        <p>Dependentes declarados no Imposto de Renda</p>
      </div>
    </div>
  );
}
