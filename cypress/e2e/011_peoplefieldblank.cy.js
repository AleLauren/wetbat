

it('TC - 011 - People Field Blank - Quote Widget', function(){
    cy.visit('/')

    cy.get('#from').type('RJ', {force: true})
    cy.get('#destination').type('SP', {force: true})
    cy.get('select[id*=transportation]')
        .select('Other', {force: true})
    cy.get('#name').type('John Doe', {force:true})
    cy.get('button[type=submit]').click({force:true})
    cy.get('#people')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Please fill out this field.')
})