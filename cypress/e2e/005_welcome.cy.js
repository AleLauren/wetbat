

it('TC - 005 - Welcome Message', function(){
    cy.visit('/')

    cy.title()
        .should('eq', 'React App')
    cy.get('div[class*=css-ouem6a]')
        .should('be.visible')
    cy.get('div[class*=css-ouem6a]')
        .should('have.text', 'Welcome to your dashboard')
})