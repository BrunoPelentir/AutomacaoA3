describe('CT 0026 - Finalizar compra com campos obrigatórios vazios', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html');

        //Adicionar um produto ao carrinho
        cy.get('.card-title').contains('Samsung galaxy s6').click();
        cy.get('.btn-success').contains('Add to cart').click();

        cy.get('.navbar-brand').click();
    });

    it('Deve exibir mensagem de erro ao tentar finalizar compra com campos obrigatórios vazios', () => {
        cy.get('#cartur').click();

        cy.get('.btn-success').contains('Place Order').click();

        //Rola a modal para que o botão "Purchase" fique visível
        cy.get('.btn-primary').contains('Purchase').scrollIntoView();

        cy.get('.btn-primary').contains('Purchase').click();

        cy.on('window:alert', (str) => {
            expect(str).to.include('Please fill out Name and Creditcard');
        });
    });
});

