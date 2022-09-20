

it('TC - 012 - People Field Float - Quote Widget', function(){
    cy.visit('/')

    cy.get('#from').type('RJ', {force: true})
    cy.get('#destination').type('SP', {force: true})
    cy.get('#people').type('.5', {force: true})
        .should('not.exist', '.')
    cy.get('#name').type('John Doe', {force:true})
    cy.get('button[type=submit]').click({force:true})
})