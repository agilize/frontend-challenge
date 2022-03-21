/* eslint-disable no-undef */
describe('Testing the Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('checking all inputs values', () => {
    cy.get('#gross-salary').clear();
    cy.get('#gross-salary').type('5.000');

    cy.get('#gross-salary').should('have.value', '5.000');

    cy.get('#gross-salary').click();
    cy.get('#gross-salary').clear();

    cy.get('#gross-salary').should('have.value', '');

    cy.get('#gross-salary').type('2.500');

    cy.get('#gross-salary').should('have.value', '2.500');

    cy.get('#total-discount').clear();
    cy.get('#total-discount').type('20');

    cy.get('#total-discount').should('have.value', '20');

    cy.get('#total-discount').clear();

    cy.get('#total-discount').should('have.value', '');

    cy.get('#dependents').click();
    cy.get('#dependents').clear();
    cy.get('#dependents').type('1');

    cy.get('#dependents').should('have.value', '10');

    cy.get('#dependents').clear();

    cy.get('#dependents').should('have.value', '0');

    cy.get('#dependents').type('1');

    cy.get('#dependents').should('have.value', '10');

    cy.get('#dependents').clear();

    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();

    cy.get('#dependents').should('have.value', '4');

    cy.get('#minus').click();
    cy.get('#minus').click();
    cy.get('#minus').click();

    cy.get('#dependents').should('have.value', '1');
  });

  it('checking if you cant put wrong value', () => {
    cy.get('#gross-salary').clear();
    cy.get('#gross-salary').type('5.000.000');

    cy.get('#gross-salary').should('have.value', '5.000.000');

    cy.get('.app').click();
    cy.get('#gross-salary').clear();

    cy.get('#gross-salary').should('have.value', '');

    cy.get('#gross-salary').type('2.000');

    cy.get('#gross-salary').should('have.value', '2.000');

    cy.get('#gross-salary').clear();
    cy.get('#gross-salary').type('1.500,00');

    cy.get('#gross-salary').should('have.value', '1.500,00');

    cy.get('#total-discount').clear();
    cy.get('#total-discount').type('200');

    cy.get('#total-discount').should('have.value', '200');

    cy.get('#total-discount').clear();
    cy.get('#total-discount').type('2');

    cy.get('#total-discount').should('have.value', '2');

    cy.get('#dependents').clear();
    cy.get('#dependents').type('2');

    cy.get('#dependents').should('have.value', '20');

    cy.get('#minus').click();
    cy.get('#minus').click();

    cy.get('#dependents').should('have.value', '18');

    cy.get('#dependents').clear();

    cy.get('#dependents').should('have.value', '0');

    cy.get('#minus').click();

    cy.get('#dependents').should('have.value', '0');

    cy.get('#plus').click();

    cy.get('#dependents').should('have.value', '1');

    cy.get('#dependents').clear();
    cy.get('#dependents').type('990');

    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();
    cy.get('#plus').click();

    cy.get('#dependents').should('have.value', '999');

    cy.get('#plus').click();

    cy.get('#dependents').should('have.value', '999');
  });

  it('check if calculation is working', () => {
    cy.get('#gross-salary').clear();
    cy.get('#gross-salary').type('1.500,00');

    cy.get('#gross-salary').should('have.value', '1.500,00');

    cy.get('#total-discount').clear();
    cy.get('#total-discount').type('2');

    cy.get('#total-discount').should('have.value', '2');

    cy.get('#plus').click();

    cy.get('#dependents').should('have.value', '1');

    cy.get('.calculate').click();

    cy.get('.liquid-salary-span-wrap > .liquid-salary-span').should('have.text', '1363');
  });
});
