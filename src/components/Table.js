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
  Tr
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
        <tbody>
          <Tr>
            <td data-testid="bruteSalary-td-name">Salário bruto</td>
            <td data-testid="bruteSalary-td-value">R$ {bruteSalary.toFixed(2)}</td>
          </Tr>
          <Tr>
            <td data-testid="inss-td-name">INSS{`(${inssPercentage}%)`}</td>
            <td data-testid="inss-td-value">-R$ {INSS.toFixed(2)}</td>
          </Tr>
          <Tr>
            <td data-testid="irrf-td-name">IRRF{`(${aliquot}%)`}</td>
            <td data-testid="irrf-td-value">-R$ {IRRF.toFixed(2)}</td>
          </Tr>
          <Tr>
            <td data-testid="discounts-name">Outros descontos</td>
            <td data-testid="discounts-value">-R$ {totalDiscounts.toFixed(2)}</td>
          </Tr>
          <Hr />
          <Tr>
            <td data-testid="liquid-salary-name">Salário Líquido</td>
            <td data-testid="liquid-salary-value">-R$ {liquidSalary.toFixed(2)}</td>
          </Tr>
        </tbody>
      </TableContainer>
    </div>
  )
}

export default Table;