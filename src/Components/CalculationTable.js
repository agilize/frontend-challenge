import React from 'react';
import { verifyINSS, verifyIRRF} from '../service/TaxCalculator';
import '../css/table.css'

function CalculationTable(grossSalary, discounts, dependents, total) {

  const inssLiquota = verifyINSS(grossSalary).liquota;
  const irrfLiquota = (verifyIRRF(grossSalary).aliquota);
  const irrfParcel = verifyIRRF(grossSalary).parcel;
  const inssTax = grossSalary * (inssLiquota/100)
  const irrfTax = ((grossSalary - inssTax) * irrfLiquota) - irrfParcel
  const dependentBase = grossSalary - ( dependents * 189.59)
  const irrfTaxWithDependents = (dependentBase * irrfLiquota) - irrfParcel
  const irrfValue = dependents >= 1 ? irrfTaxWithDependents.toFixed(2) : irrfTax.toFixed(2)
  const irrfPorcentage = (irrfValue * 100)/grossSalary
  
  return (
    <div id="calculationTable">
      <h6>Como o cálculo é feito?</h6>
      <table>
        <tbody>
          <tr>
            <td>Salário Bruto</td>
            <td>R$ {grossSalary}</td>
          </tr>
          <tr>
            <td>INSS({(inssLiquota).toFixed(2)}%)</td>
            <td>-R$ { inssTax.toFixed(2) }</td>
           </tr>
          <tr>
            <td>IRRF({irrfPorcentage.toFixed(2)}%)</td>
            <td> -R$ { irrfValue }</td>
          </tr>
          <tr>
            <td>Outros descontos</td>
            <td> -R$ {discounts}</td>
          </tr>
          <tr>
            <td>Salário Liquído</td>
            <td>R$ {total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CalculationTable

