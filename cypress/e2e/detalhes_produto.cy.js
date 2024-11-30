describe('Captura de Detalhes do Produto', () => { 
  it('Deve acessar o produto e pegar seus detalhes', () => {
    // Acesse o site
    cy.visit('https://www.demoblaze.com/');
  
    // Clique na categoria "Phones"
    cy.contains('a', 'Phones').click();

    // Aguarde o carregamento da lista de produtos
    cy.get('.card-title').should('be.visible');

    // Clique no produto "Iphone 6 32gb"
    cy.contains('.card-title', 'Iphone 6 32gb').click();

    // Aguarde a página do produto carregar
    cy.get('.name').should('be.visible');
  
    // Captura os detalhes do produto
    cy.get('h2.name').then(($titulo) => {
      const titulo = $titulo.text();
      cy.log('Título do produto: ' + titulo);
    });
  
    cy.get('h3.price-container').then(($preco) => {
      const preco = $preco.text();
      cy.log('Preço do produto: ' + preco);
    });
  
    cy.get('#more-information').then(($descricao) => {
      const descricao = $descricao.text();
      cy.log('Descrição do produto: ' + descricao);
    });
  });
});

  