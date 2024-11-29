describe('automacao demoblaze', () => {
  before(() => {
    // Função que diminui a velocidade do teste
    Cypress.config('defaultCommandTimeout', 50000); // Tempo de espera para os comandos
  });

  it('Adicionando um produto ao carrinho', () => { // O que vai ser testado
    cy.visit('https://www.demoblaze.com/') // Site que vai ser testado
    
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch', { timeout: 50000 }) // Descrição do produto "Smartphone"
      .should('be.visible') // Deixa o elemento mais visível
      .click(); // Ação de clicar no produto

    cy.get('.col-sm-12 > .btn', { timeout: 50000 }) // Descrição do botão "Add to cart"
      .should('be.visible') // Deixa o elemento mais visível
      .click(); // Ação de clicar no botão


    cy.get('#cartur') // Descrição do botão "cart" pra verificar se foi adicionado ao carrinho
      .click();  // Ação de clicar no botão
  });
})