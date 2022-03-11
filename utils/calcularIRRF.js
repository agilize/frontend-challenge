// Até R$ 1.903,98: isento de imposto de renda	-	-
// Se está entre R$ 1.903,99 e 2.826,65	7,5%	R$ 142,80
// De R$ 2.826,66 a R$ 3.751,05	15%	R$ 354,80
// De R$ 3.751,06 a R$ 4.664,68 (Teto do INSS em 2022)	22,5%	R$ 636,13
// Acima de R$ 4.664,68	27,5%	R$ 869,36

export default function calcularIRRF(salarioBrutoInput) {

  if (salarioBrutoInput <= 1903.98)
    return [0, 0, 0];

  if (salarioBrutoInput >= 1903.99 && salarioBrutoInput <= 2826.65) 
    return [0.075, 42.80, 7.5];

  if (salarioBrutoInput >= 2826.66 && salarioBrutoInput <= 3751.05)
    return [0.15, 354.80, 15];

  if (salarioBrutoInput >= 3751.06 && salarioBrutoInput <= 4664.68)
    return [0.225, 636.13, 22.5];

  if (salarioBrutoInput >= 4664.69)
    return [0.275, 869.36, 27.5];

}
