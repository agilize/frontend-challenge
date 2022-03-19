import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import calculateEarnings from '../helpers/calculateEarning';
import { 
  BorderNetSalary,
  DivNetSalary,
  H2,
  Hr,
  PTable,
  Span,
  TableContainer,
  DivRow
} from '../styled-components/TableStyle';

function Table() {
  const { 
    bruteSalary,
    totalDiscounts,
    dependentsNumber,
  } = useContext(AppContext);
  
  const inssPercentage = calculateEarnings.percentageInss(bruteSalary);

  const INSS = calculateEarnings.calculateInss(bruteSalary, inssPercentage);

  const { aliquot, deductiblePortion } = calculateEarnings.percentageIrrf(bruteSalary);

  const IRRF = calculateEarnings.calculateIrrf({
    bruteSalary,
    INSS,
    aliquot,
    deductiblePortion
  }, dependentsNumber);

  const liquidSalary = calculateEarnings.calculateLiquidSalary({
    bruteSalary,
    INSS,
    IRRF,
    totalDiscounts,
  });

  return (
    <div>
      <DivNetSalary>
        <H2>
          Seu salário líquido será 
        </H2>
        <BorderNetSalary><Span>R$</Span>{liquidSalary.toFixed(2)}</BorderNetSalary>
      </DivNetSalary>
      <TableContainer>
        <PTable>Como o cálculo é feito?</PTable>
        <div>
          <DivRow>
            <div data-testid="bruteSalary-td-name">Salário bruto</div>
            <div data-testid="bruteSalary-td-value">R$ {bruteSalary}</div>
          </DivRow>
          <DivRow>
            <div data-testid="inss-td-name">INSS{`(${inssPercentage}%)`}</div>
            <div data-testid="inss-td-value">-R$ {INSS}</div>
          </DivRow>
          <DivRow>
            <div data-testid="irrf-td-name">IRRF{`(${aliquot}%)`}</div>
            <div data-testid="irrf-td-value">-R$ {IRRF}</div>
          </DivRow>
          <DivRow>
            <div data-testid="discounts-name">Outros descontos</div>
            <div data-testid="discounts-value">-R$ {totalDiscounts}</div>
          </DivRow>
          <Hr />
          <DivRow>
            <div data-testid="liquid-salary-name">Salário Líquido</div>
            <div data-testid="liquid-salary-value">-R$ {liquidSalary}</div>
          </DivRow>
        </div>
      </TableContainer>
    </div>
  )
}

export default Table;