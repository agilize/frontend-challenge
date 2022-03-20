import logo from './assets/logo.png';
import { useState } from "react";
import './App.css';

function App() {
  const [form, setForm] = useState({
    gross: 0.00,
    discount: 0.00,
    dependents: 0,
  });

  const [hide, setHide] = useState(true);

  const handleChange = (value, name) => {
    const newValue = (value === '') ? 0 : value;
    setForm({...form, [name]: newValue})
    console.log(form)
  };

  const incDec = (e, btn) => {
    e.preventDefault();
    if(btn === "-" && form.dependents !== 0) {
      setForm({...form, dependents: form.dependents - 1})
    } else if (btn === "+") {
      setForm({...form, dependents: form.dependents + 1})
    }
  };

  const inssDescount = (gross) => {
    const first = (7.5 / 100) * 1212;
    const second = (9 / 100) * (2427.35 - 1212);
    const thirt = (12 / 100) * (3641.03 - 2427.35);

    if (gross <= 1212.00) {
      return (7.5 / 100)
    } else if (gross <= 2427.35) {
      return first + (9 / 100) * (gross - 1212) 
    } else if (gross <= 3641.03) {
      return first + second + (12 / 100) * (gross - 2427.35)
    } else {
      return first + second + thirt + (14 / 100) * (gross - 3641.03)
    }
  }

  const irrfDeduction = (gross) => {
    if (gross <= 1903.98) {
      return {aliquota: 0}
    } else if (gross > 1903.99 && gross < 2826.65) {
      return {aliquota: (7.5 / 100), parcel: 142.80}
    } else if (gross > 2826.66 && gross < 3751.05) {
      return {aliquota: (15 / 100), parcel: 354.80}
    } else if (gross > 3751.06 && gross < 4664.68) {
      return {aliquota: (22.5 / 100), parcel: 636.13}
    } else {
      return {aliquota: (27.5 / 100), parcel: 869.36}
    }
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    const inss = (inssDescount(form.gross)).toFixed(2);
    const base = (form.gross - inss) - (form.dependents * 189.59);
    const {aliquota, parcel} = irrfDeduction(base);
    const irrf = ((aliquota === 0) ? 0 : (base * aliquota - parcel)).toFixed(2);
    const result = base - irrf
    const netProfit = (result - form.discount).toFixed(2)
    setHide(false);
    setForm({
      ...form,
      net: netProfit,
      inss: {value: inss, percent: ((inss / form.gross) * 100).toFixed(2)},
      irrf: {value: irrf, percent:((irrf / base) * 100).toFixed(2)}
    });
    console.log((irrf / base) * 100)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="Company_logo"/>
        <h2>Calcudora de salário líquido</h2>
      </header>
      <body>
        <div>
          <form className="App-form">
            <label>
              Qual seu salário bruto?
              <div className="container-row">
                <span className="reais">R$</span>
                <input type="money" value={form.gross} onChange={({target}) => handleChange(target.value, "gross")} className="input" />
              </div>
            </label>
            <label>
              Total de descontos
              <div className="container-row">
                <span className="reais">R$</span>
                <input value={form.discount} onChange={({target}) => handleChange(target.value, "discount")} className="input" />
              </div>
            </label>
            <label>
              Quantos dependentes você tem?
              <div className="container-row">
                <button className="dependents-btn" onClick={(e) => incDec(e, "-")}>-</button>
                <input className="dependents-ipt" value={form.dependents} onChange={({target}) => handleChange(target.value, "dependents")} />
                <button className="dependents-btn" onClick={(e) => incDec(e, "+")} >+</button>
              </div>
            </label>
            <button className="calculate" onClick={handleClick}>CALCULAR</button>
          </form>
        </div>
        {hide ? '' :
          <div>
            <div className='container-row'>
              <h3>Seu salário líquido será</h3>
              <h2 className='netProfit'>R${form.net}</h2>
            </div>
            <p>Como o cálculo é feito?</p>
            <div className='container-col'>
              <div className='table'>
                <div>Salário bruto </div>
                <div>R${form.gross}</div>
              </div>
              <div className='table'>
                <div>INSS({form.inss.percent}%) </div>
                <div>- R${form.inss.value}</div>
              </div>
              <div className='table'>
                <div>IRRF({form.irrf.percent}%)</div>
                <div>- R${form.irrf.value}</div>
              </div>
              <div className='table'>
                <div>Outros descontos </div>
                <div>- R${form.discount}</div>
              </div>
              <div className={'table result'}>
                <div>Salário líquido </div>
                <div>R${form.net}</div>
              </div>
            </div>
          </div>
        }
      </body>
    </div>
  );
}

export default App;
