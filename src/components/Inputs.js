import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {
  MainContainerInputs,
  Div,
  ImgVector,
  Inputs,
  Label,
  P,
  Container,
  InputDependents,
  Button,
  ImgButton,
  ContainerDependents, } from '../styled-components/InputStyle';
import vector from '../assets/vector.png';
import decrement from '../assets/decrement.png';
import increment from '../assets/increment.png';

function CalculatorInputs(props) {
  const {
    setBruteSalary,
    setTotalDiscounts,
    dependentsNumber,
    setDependentsNumber,
    bruteSalary,
    totalDiscounts
  } = useContext(AppContext);
  const { name } = props

  function dependents({ target }) {
    const dependentsToNumber = Number(target.value);
    setDependentsNumber(dependentsToNumber);
  }
  
  function conditionalRender() {
    if (name === "bruteSalary") {
      return (
        <MainContainerInputs>
          <Label
            htmlFor="bruteSalary"
          >
            Qual seu salário bruto?
          </Label>
          <Container>
            <Div>R$</Div>
            <Inputs
              onChange={ ({ target }) => setBruteSalary(target.value) }
              placeholder="0.00"
              value={ bruteSalary === 0 ? '' : bruteSalary}
              id="bruteSalary"
              data-testid="bruteSalary"
            />
          </Container>
          <P>
            <ImgVector src={ vector } alt="vector"/> Salário bruto
            sem descontos
          </P>
        </MainContainerInputs>
      )
    }

    if(name === "totalDiscounts") {
      return (
        <MainContainerInputs>
          <Label
            htmlFor="totalDiscounts"
          >
            Total de descontos
          </Label>
          <Container>
            <Div>R$</Div>
            <Inputs 
              onChange={ ({ target }) => setTotalDiscounts(target.value)}
              placeholder="0.00"
              value={ totalDiscounts === 0 ? '' : totalDiscounts }
              id="totalDiscounts"
              data-testid="totalDiscounts"
            />
          </Container>
          <P>
            <ImgVector src={ vector } alt="vector"/> Pensão alimentícia,
            plano de saúde...
          </P>
        </MainContainerInputs>
      )
    }

    if (name === "dependentsNumber") {
      return (
        <MainContainerInputs>
          <Label
            htmlFor="dependentsNumber"
          >
            Quantos dependentes você tem?
          </Label>
          <ContainerDependents>
            <Button
              data-testid="btn-decrement"
              min="0"
              onClick={ () => {
              setDependentsNumber((prevState) => 
                prevState === 0 || prevState === "" ? 0 : prevState - 1
              ) } }
            >
              <ImgButton src={ decrement } alt="decrement vector"/>
            </Button>
            <InputDependents
              onChange={dependents}
              placeholder="0"
              value={ dependentsNumber === 0 ? '' : dependentsNumber }
              id="dependentsNumber"
              data-testid="dependentsNumber"
            />
            <Button
              data-testid="btn-increment"
              onClick={ () => setDependentsNumber((prevState) => Number(prevState) + 1) }
            >
              <ImgButton src={ increment } alt="increment vector" />
            </Button>
          </ContainerDependents>
          <P>
            <ImgVector src={ vector } alt="vector"/> Dependentes declarados no
            imposto de renda
          </P>
        </MainContainerInputs>
      )
    }
  }

  const renderInputByName = conditionalRender();

  return (
    renderInputByName
  )
}

export default CalculatorInputs;
