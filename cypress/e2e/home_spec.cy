describe('Automatização DemoBlaze', () => {
    it('Deve abrir a tela Home ao clicar na opção Home', () => {
      // Acessando o site
      cy.visit('https://www.demoblaze.com/');
  
      // Clicando na opção "Home" no menu
      cy.contains('Home').click();
  
      // Valida se a URL da página contém o caminho correto
      cy.url().should('include', '/index.html');
  
      // Opcional: Verifica se um elemento específico da tela Home está visível
      // Exemplo, verificando se o título da página está presente
      cy.contains('PRODUCT STORE').should('be.visible');  // Substitua com o texto correto que está visível na Home
  });
});
  
