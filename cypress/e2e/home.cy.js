
it('it should load home page', function(){
    cy.visit('/')

    cy.title()
        .should('eq', 'React App')
    cy.get('div[class*=css-ouem6a]')
        .should('be.visible')
})
