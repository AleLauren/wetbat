

it('TC - 006 - Adding Quotes', function(){
    cy.visit('/')

    cy.get('#from').type('RJ', {force: true})
    cy.get('#destination').type('SP', {force: true})
    cy.get('#people').type('2', {force: true})
    cy.get('select[id*=transportation]')
        .select('Other', {force: true})
    cy.get('#name').type('John Doe', {force:true})
    cy.get('button[type=submit]').click({force:true})

    cy.get('svg[data-testid=RestartAltIcon]').click({force: true})
    cy.contains('table tbody tr', 'John Doe')
        .then(function (item){
            expect(item).to.contain('John Doe')
        })
})