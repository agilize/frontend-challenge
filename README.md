# Calculadora de salário liquido

Para iniciar um cálculo de salário líquido, o primeiro dado cadastrado será o valor do salário bruto. Com essa informação você terá a base para os percentuais de descontos que serão feitos durante o processo de cálculo.

Em seguida, devem ser levantados todos os descontos realizados em um determinado mês. 

Esses descontos podem ser o INSS, o Imposto de Renda, desconto de vale transporte, vale refeição, planos de saúde e tudo que é descontado do seu salário.

Contudo, também é preciso somar todos os adicionais recebidos, com adicional noturno, hora extra, insalubridade e qualquer benefício que possa ser somado no mês de referência.

## O desafio

- Fazer uma calculadora de salário liquido semelhante a essa do IDinheiro: [Acesse para visualizar](https://www.idinheiro.com.br/calculadoras/calculadora-de-salario-liquido/)
- Confira o [layout do projeto](https://www.figma.com/file/wFJI3VnorFffh6tVcvYqlg/Calculadora-de-sal%C3%A1rio-l%C3%ADquido?node-id=1%3A12)
- Tecnologias esperadas:
  - React, Html, CSS

### Vamos a um exemplo para ficar mais fácil de entender? (Exemplo sem dependentes)

Imagine que você receba o salário de R$ 3.000,00 por mês, e o seu desconto de INSS seja de 9%.

Primeiro, você verifica a faixa salarial e a alíquota correspondente, ou seja, para R$ 3.000,00 a alíquota é de 15%. Assim, para calcular o Imposto de Renda Retido na Fonte, você inicia descontando o valor pago para o INSS, que,  no exemplo, seria o salário bruto, R$ 3.000,00 menos 9%, ou seja, menos R$ 270,00.  E, depois, é só reduzir do valor a parcela dedutível. Nesse caso, teríamos o seguinte:

IRRF = (salário bruto – desconto INSS) x alíquota IRRF – parcela dedutível

IRRF = (3000-270) x 15% – 354,80

IRRF = R$ 54,70 por mês.'

**Bônus**:
- Incluir calculo de dedução por dependentes na calculadora
  - A dedução é de **R$189,59** por cada dependente.

### Exemplo com dependentes (BÔNUS)
O valor reduzido passa a ser a nova base cálculo para o imposto de renda retido na fonte.

Veja como fica:

Dedução para 2 dependentes: **3.431,82 - (2 x 189,59) = 3.052,64**

Alíquota: **3.052,64 x 15% = 457,90**

Parcela a deduzir: **457,90 - 354,80 = 103,10**

Neste caso, o valor do salário após o desconto de R$ 103,10 em imposto de renda deve ficar em R$ 3.328,72.

## Tabela do INSS

|  FAIXA DE SALÁRIO 	|   ALÍQUOTA APLICADA	|
|--- 	|---	|
| Até um salário-mínimo (R$ 1.212,00 em 2022)  	|   7,5%	|
| R$ 1.212,01 até R$ 2.427,35  	|   9%	| 
| R$ 2.427,36 até R$ 3.641,03  	|   12%	|
| De R$ 3.641,04 até R$ 7.087,22 (Teto do INSS em 2022)  	|  14%	|

## Tabela do IRRF

|  FAIXA DE SALÁRIO 	|   ALÍQUOTA APLICADA	|   PARCELA DE DEDUÇÃO	|
|--- 	|---	|---	|
| Até R$ 1.903,98: isento de imposto de renda  	|   -	|   -	|
| Se está entre R$ 1.903,99 e 2.826,65  	|   7,5%	|    R$ 142,80	|
| De R$ 2.826,66 a R$ 3.751,05  	|   15%	|    R$ 354,80	|
| De R$ 3.751,06 a R$ 4.664,68 (Teto do INSS em 2022)  	|  22,5%	|   R$ 636,13	|
| Acima de R$ 4.664,68  	|  27,5%	|   R$ 869,36	|



## Sugestões

- Faça um segundo README com o nome PROJETO.md explicando o que foi feito, como forma de documentação.
- Diferenciais:
    - Boa documentação
    - Testes unitários modulares

## Como você deve nos enviar sua solução?

Faça um clone desde projeto, crie uma branch com seu nome-sobrenome e ao finalizar abra um pull-request para que um avaliador da agilize possa visualizar
e envie um e-mail para [dev@agilize.com.br](mailto:dev@agilize.com.br) com o assunto: **[DESAFIO FRONTEND AGZ] + Finalizado + (nome-da-branch)**

## Como abrir um pull request
- Passo 1: Fazer um fork do projeto
- Passo 2: Clonar seu fork para o seu computador
- Passo 3: Fazer o projeto em sua branch
- Passo 4: Abrir o pull request

Para mais detalhes esse [link](https://www.webdevdrops.com/como-criar-um-pull-request-no-github-passo-a-passo/) tem uma explicação bastante completa

