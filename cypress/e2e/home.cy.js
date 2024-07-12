describe('Home Page test',()=>{
    it('Check The Input field',()=>{
        cy.visit('/');
        cy.get('input').type('Cinderella')
        cy.get('button').should('be.visible')
        cy.get('button').click();
        cy.contains('Welcome,Cinderella')
        cy.get('input').should('have.value','Cinderella')

    })
})