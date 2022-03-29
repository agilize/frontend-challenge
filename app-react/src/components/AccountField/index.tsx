import React from 'react';
import Button from '../Button';
import Exclamation from '../../assets/Exclamation.svg';
import More from '../../assets/More.svg';
import Less from '../../assets/Less.svg';
import './styles.css';

import { useDispatch } from 'react-redux';
import { setGrossValue, setDiscount } from '../../redux/reducers/userReducer';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

function AccountField() {
  const user = useAppSelector(state => state.user);
  const dispatch = useDispatch();

  const [ dependents, setDependents ] = React.useState(0);

  const handleClickMore = () => setDependents(dependents + 1);

  const handleClickLess = () => {
    if (dependents > 0) {
      setDependents(dependents - 1);
    } else {
      setDependents(0);
    }
  }

  const handleGrossValue = (e:React.ChangeEvent<HTMLInputElement>) => dispatch(
    setGrossValue(e.target.value)
  );
  const handleDiscount = (e:React.ChangeEvent<HTMLInputElement>) => dispatch(
    setDiscount(e.target.value)
  );
  
  return (
    <section className='first-section'>

      <div className='field'>
        <label className="field-title">
          Qual seu salário bruto ?
        </label>
        <div className="icon">
          R$
        </div>
        <input 
          type="number" 
          placeholder='0,00'
          value={user.grossValue}
          onChange={handleGrossValue}
        />
        <div className="field-warning">
          <img src={Exclamation} alt="Exclamation" />
          <span>Salário bruto sem descontos</span>
        </div>
      </div>

      <div className='field'>
        <label className="field-title">
          Total de descontos
        </label>
        <div className="icon icon-two">
          R$
        </div>
        <input 
          type="number" 
          placeholder='0,00'
          value={user.discount}
          onChange={handleDiscount}
        />
        <div className="field-warning">
          <img src={Exclamation} alt="Exclamation" />
          <span>Pensão alimentícia, plano de saúde... </span>
        </div>
      </div>

      <div className='field'>
        <label className="field-title">
          Quantos dependentes você tem ?
        </label>

        <div className='field-area--input'>
          <img 
            src={Less} 
            alt="Menos"
            onClick={handleClickLess}
          />
          <input 
            type="number" 
            placeholder='0'
            value={dependents}
          />
          <img 
            src={More} 
            alt="Mais" 
            onClick={handleClickMore}
          />
        </div>

        <div className="field-warning">
          <img src={Exclamation} alt="Exclamation" />
          <span>Dependentes declarados no Imposto de Renda</span>
        </div>

      </div>
      <Button  />
    </section>
  )
}

export default AccountField;
