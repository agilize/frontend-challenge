import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { InputBRL, DependentsInput, Button, Result } from '../../components';
import { CalcParameters, CurrencyFormated } from '../../types';
import styles from './style.module.scss';

const initialValue = {
  salary: 0,
  discount: 0,
  dependents: 0,
};

const initialCurrencyFormated = {
  salary: '',
  discount: '',
};

export default function Home() {
  const [params, setParams] = useState<CalcParameters>(initialValue);
  const [currencyFormated, setCurrencyFormated] = useState<CurrencyFormated>(
    initialCurrencyFormated
  );
  const [isShowResult, setIsShowResult] = useState(false);

  const handleShow = () => {
    if (params.salary === 0 && isShowResult === false) {
      toast.warning('O campo salário é obrigatório!', {
        position: 'top-center',
      });
    }

    if (isShowResult) {
      setParams(initialValue);
      setCurrencyFormated(initialCurrencyFormated);
    }

    if (params.salary > 0) {
      setIsShowResult(!isShowResult);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { value } = e.currentTarget;
    value = value.replace(/\D/g, ''); // remove all non-numeric
    setParams({
      ...params,
      [e.currentTarget.name]: Number(value) / 100,
    });

    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

    setCurrencyFormated({
      ...currencyFormated,
      [e.currentTarget.name]: value,
    });
  };

  const handleIncrease = () => {
    setParams({
      ...params,
      dependents: params.dependents + 1,
    });
  };

  const handleDecrease = () => {
    setParams((prevState) => {
      if (prevState.dependents === 0) {
        return { ...prevState };
      }
      return {
        ...prevState,
        dependents: prevState.dependents - 1,
      };
    });
  };

  return (
    <main className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="./assets/logo.png" className={styles.logo} alt="logo" />
      </div>
      <h1 className={styles.title}>Calculadora de salário líquido</h1>

      <form className={styles.form}>
        <InputBRL
          infoText="Salário bruto sem descontos"
          questionText="Qual seu salário bruto?"
          onChange={handleChange}
          name="salary"
          placeholder="0,00"
          value={currencyFormated.salary}
          autoFocus
          disabled={isShowResult}
        />
        <InputBRL
          infoText="Pensão alimentícia, plano de saúde..."
          questionText="Total de descontos"
          onChange={handleChange}
          name="discount"
          placeholder="0,00"
          value={currencyFormated.discount}
          disabled={isShowResult}
        />
        <DependentsInput
          infoText="Dependentes declarados no Imposto de Renda"
          questionText="Quantos dependentes você tem?"
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          dependentsValue={params.dependents}
          isDisable={isShowResult}
        />
        <Button
          name={isShowResult ? 'LIMPAR' : 'CALCULAR'}
          handleClick={handleShow}
        />
      </form>

      <Result params={params} isShowResult={isShowResult} />
    </main>
  );
}
