# Bem vindo ao repositório do projeto Calculadora de salário liquido

A calculadora foi elaborada com a intenção de automatizar alguns calculos da folha de pagamento, com campos para digitar o salário bruto, descontos vigentes e número de dependentes. A calculadora retorna os detalhes como salário líquido, descontos (pensão alimentícia, plano de saúde...) e as parcelas de IRRF e INSS.

## Tecnologias utilizadas

- O projeto foi desenvolvido utilizando React.
- Foi utilizado React Testing Library para desenvolver os testes. O projeto conta com 100% de cobertura de testes.
- A estilização do projeto foi feita utilizando Styled-components. A intenção era reaproveitar ao máximo a utilização de componentes estilizados. Para saber mais sobre a lib [styled-components](https://styled-components.com/)
- Confira o [layout do projeto](https://www.figma.com/file/wFJI3VnorFffh6tVcvYqlg/Calculadora-de-sal%C3%A1rio-l%C3%ADquido?node-id=1%3A12)
- Foi utilizado commitzen e commitlint para a padronização e melhor organização nos commits.

## Segue abaixo a fórmula utilizada para a elaboração da calculadora.
#### Vamos a um exemplo para ficar mais fácil de entender? (Exemplo sem dependentes)

Imagine que você receba o salário de R$ 3.000,00 por mês, e o seu desconto de INSS seja de 9%.

Primeiro, você deve-se calcular a faixa salarial e a alíquota correspondente, ou seja, para R$ 3.000,00 a alíquota é de 15%. Assim, para calcular o Imposto de Renda Retido na Fonte, depois inicia descontando o valor pago para o INSS, que,  no exemplo, seria o salário bruto, R$ 3.000,00 menos 9%, ou seja, menos R$ 270,00.  E, então, é só reduzir do valor a parcela dedutível. Nesse caso, teríamos o seguinte:

IRRF = (salário bruto – desconto INSS) x alíquota IRRF – parcela dedutível

IRRF = (3000-270) x 15% – 354,80

IRRF = R$ 54,70 por mês.'

**Importante**:
- Incluir calculo de dedução por dependentes na calculadora
  - A dedução é de **R$189,59** por cada dependente.

#### Exemplo com dependentes (BÔNUS)
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



## Instruções para utilizar o projeto
  1. Clone o repositório  
   `git@github.com:brunocdeveloper/frontend-challenge.git`  
   
  2. Entre na pasta do repositório que você acabou de clonar:  
    `cd frontend-challenge`

  3. Inicie o projeto com o comando `npm start`

### Testes
  Os testes foram desenvolvidos utilizando React Testing Library. Ao rodar o teste é criado a pasta coverage e no terminal é exibido a cobertura de todos os arquivos criados no projeto
  1. Para rodar os testes `npm run test`
  

## Dúvidas sobre o projeto
Caso queira saber mais sobre o desenvolvimento do projeto entre em contato: brunocmoraes97@gmail.com



