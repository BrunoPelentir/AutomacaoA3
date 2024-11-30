describe('Teste de Compra no DemoBlaze', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/');
    });
  
    it('Deve concluir uma compra com sucesso usando dados válidos', () => {
      // Selecionar o primeiro produto
      cy.get('.card-title a')
        .first()
        .click();
  
      // Adicionar ao carrinho
      cy.contains('Add to cart').click();
  
      // Esperar o alerta e confirmá-lo
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Product added');
      });
  
      // Acessar o carrinho
      cy.contains('Cart').click();
  
      // Confirmar que o produto está no carrinho
      cy.get('tr.success')
        .should('exist')
        .and('contain', 'Samsung galaxy s6'); // Alterar o nome do produto se necessário
  
      // Clicar em "Place Order"
      cy.contains('Place Order').click();
  
      // Preencher o formulário de compra
      cy.get('#name').type('Ana Testadora');
      cy.get('#country').type('Brasil');
      cy.get('#city').type('São Paulo');
      cy.get('#card').type('4111111111111111'); // Exemplo de número de cartão fictício
      cy.get('#month').type('12');
      cy.get('#year').type('2024');
  
      // Confirmar a compra
      cy.contains('Purchase').click();
  
      // Verificar a mensagem de confirmação
      cy.get('.sweet-alert').should('be.visible');
      cy.get('.sweet-alert').should('contain', 'Thank you for your purchase!');
    });
  });
  