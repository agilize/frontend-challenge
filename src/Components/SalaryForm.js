import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input';
import { Form } from 'react-bootstrap';
import  '../css/form.css';
import helpIcon from '../assets/help-icon.png';
import { calculateTax } from '../service/TaxCalculator';
import CalculationTable from './CalculationTable';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import border from '../assets/border.png'
import addIcon from '../assets/addIcon.png'
import minusIcon from '../assets/minusIcon.png'

function SalaryForm() {
  
  const [grossSalary, setGrossSalary] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [dependents, setDependents] = useState(0);
  const [total, setTotal] = useState(0);
  const [tableInfo, setTableInfo] = useState({})

  const decreaseDependents = () => {
    if(dependents - 1 >= 0) {
      setDependents(dependents - 1) 
    }}

  const addDependent = () => {
    setDependents(dependents + 1)
  }

const bg = {
  'background': `url(${ border })`,
  'background-size': '250px 100px',
  'background-clip': 'padding-box',
  'background-repeat': 'no-repeat',
  'text-align': 'center',
  'width':' 250px',
  'height': '100px',
  'margin-left': '10px',
  'padding-top': '29px'
}

  const showTotalAndCalculation = () => {
    if(total){
      return(
        <> 
          <div id="totalDiv">
            <p>Seu salário liquido será de:</p><div style={bg}><span>R$ {total}</span></div>
          </div>
          {CalculationTable(tableInfo.grossSalary, tableInfo.discount, tableInfo.dependents, total)}
        </>
      );
    }
  }
  
  return (
    <>
      <Form className='form'>
          <Form.Group className="mb-3 formGroup">
          <Form.Label className="labelInput" htmlFor="salary">
            Qual é o seu salário bruto? 
          </Form.Label>
          <div className="currencyInput">
            <div className="retangle"><div className="coin">R$</div></div>
            <CurrencyInput name="salary" id="salary" className="input" value={ grossSalary } onChange={ (e) => setGrossSalary(parseFloat(e.replace(/,/g, ''))) }/>
          </div>
          <Form.Text className="text-muted labelInput">
          <div className="help">
            <img src={ helpIcon } alt="help icon" className="helpIcon" width="16" height="16"/>
              Salário bruto sem descontos
            </div>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 formGroup" >
          <Form.Label className="labelInput" htmlFor="discount">
            Total de desconto
          </Form.Label>
          <div className="currencyInput">
            <div className="retangle"><div className="coin">R$</div></div>
            <CurrencyInput name="discount"  className="input" value={discount} onChange={ (e) => setDiscount(e) }/> 
          </div>
          <Form.Text className="text-muted labelInput">
            <div className="help">
              <img src={ helpIcon } alt="help icon" className="helpIcon" width="16" height="16"/>
              Pensão alimentícia, plano de saúde
            </div>
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3 formGroup" >
          <Form.Label className="labelInput" htmlFor="dependents">
            Quantos dependentes você tem?
            </Form.Label>
            <button
              className= "addDecrese"
              type="button"
              onClick={ decreaseDependents }
            >
              <img src={minusIcon} alt="retirar"   Width="26px" Height="26px" />
            </button>
            <input 
              type="number"
              name="dependents"
              id="dependents"
              value= { dependents }
              onChange={ (e) => { setDependents(e.target.value) }}/>
            <button
              className= "addDecrese"
              type="button"
              onClick={ addDependent }
            >
                <img src={addIcon} alt="adicionar"   width="26px" height="26px" />
            </button>
            <Form.Text className="text-muted labelInput">
              <div className="help">
              <img src={helpIcon} alt="help icon" className="helpIcon" width="16" height="16"/>
                Dependentes declarados no Imposto de Renda
              </div>
            </Form.Text>
        </Form.Group>
        <Button
          id="calculateButtton"
          type="button"
          onClick={() => {
            setTotal(calculateTax(grossSalary, discount, dependents));
            setTableInfo({grossSalary, discount, dependents});
            setGrossSalary(0);
            setDependents(0);
            setDiscount(0);
          }}>
        CALCULAR</Button>
      </Form>
      {showTotalAndCalculation()}
    </>
  )
}

export default SalaryForm
