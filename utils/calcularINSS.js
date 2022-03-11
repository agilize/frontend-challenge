export default function calcularINSS(salarioBrutoInput) {

  if (salarioBrutoInput <= 1212)
    return [salarioBrutoInput * 0.075, 7.5];

  if (salarioBrutoInput >= 1212.01 && salarioBrutoInput <= 2427.35)
    return [salarioBrutoInput * 0.09, 9];

  if (salarioBrutoInput >= 2427.36 && salarioBrutoInput <= 3641.03)
    return [salarioBrutoInput * 0.12, 12];

  if (salarioBrutoInput >= 3641.04)
    return [salarioBrutoInput * 0.14, 14];

}