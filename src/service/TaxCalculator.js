export const verifyIRRF = (grossSalary) => {
  if(grossSalary <= 1903.98){
    return { aliquota: 0, parcel: 0 }
  }
  if( 1903.99 <= grossSalary && grossSalary <= 2826.65){
    return { aliquota: 7.5/100, parcel: 142.80 }
  }
  if( 2826.66 <= grossSalary && grossSalary <= 3751.05){
    return { aliquota: 15/100, parcel: 354.80 }
  }
  if(3751.06 <= grossSalary && grossSalary <= 4664.68){
    return { aliquota: 22.5/100, parcel: 636.13 }
  }
  if(grossSalary > 4664.68){
    return { aliquota: 27.5/100, parcel: 869.36 }
  }
} 

export const verifyINSS = (grossSalary) => {
  let inss = 0
  if(grossSalary >= 1212){
    inss = 1212 * (7.5/100);
  }
  if( 1212.01 <= grossSalary){
    if(grossSalary >= 2427.36){
      inss += (2427.35 - 1212) * 9/100 
    } 
    else { 
      inss += ((grossSalary - 1212) * 9/100);
      return {value: inss.toFixed(2), liquota: (inss * 100)/grossSalary};
      }
   }
  if( 2427.36 <= grossSalary){
    if(grossSalary >= 3641.03){
      inss += (3641.02 - 2427.35 ) * 12/100
    } 
    else { 
      inss += ((grossSalary - 2427.35) * 12/100);
      return {value: inss.toFixed(2), liquota: (inss * 100)/grossSalary}};
    }
  if(grossSalary >= 3641.03){
    inss += ((grossSalary - 3641.02) * 14/100);
    return {value: inss.toFixed(2), liquota: (inss * 100)/grossSalary};
  }
}

export const calculateTax = (grossSalary, descounts, dependents) => {
  // IRRF = (salário bruto – desconto INSS) x alíquota IRRF – parcela dedutível
  if(dependents >= 1) {
    const base = grossSalary - ( dependents * 189.59)
    const irf = (base * verifyIRRF(grossSalary).aliquota) - verifyIRRF(grossSalary).parcel
    const inss = verifyINSS(grossSalary).value
    const liquidSalary = grossSalary - irf - inss - descounts
    return liquidSalary.toFixed(2)
  }
  console.log(verifyINSS(grossSalary).value)
  const base = grossSalary - verifyINSS(grossSalary).value
  const irf = (base * verifyIRRF(grossSalary).aliquota) - verifyIRRF(grossSalary).parcel;
  const liquidSalary = base - irf - descounts
  return liquidSalary.toFixed(2)
}

