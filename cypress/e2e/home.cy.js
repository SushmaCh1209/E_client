describe('Home Page Test',()=>{
    it('Check The Input field',()=>{
        cy.visit('/')
        cy.get('input').type('Sushma')
        cy.get('button').should('be.visible')
        cy.get('button').click();
        cy.contains('Welcome,Sushma')
        cy.get('input').should('have.value','Sushma')
    })
})