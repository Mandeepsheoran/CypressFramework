describe('Data driven test', ()=>{
    let userDetails;
    beforeEach(()=>{
        cy.fixture('dtuser.json').then((user)=>{
            userDetails = user
        })
    })


    beforeEach(function() {
        cy.fixture('dtuser.json').then((user)=>{
            this.userDetails1 = user;
        })
    })

    it('Simple login using hardcoded test data', ()=> {
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
        cy.get('#mat-input-0').type('mandeep.sheoran@sita.aero')
        cy.get('#mat-input-1').type('Machine@123')
        cy.contains('LOGIN').click()
    })

    it('Login using fixture file data', () =>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
        cy.fixture('dtuser.json').then((user) => {
             cy.get('#mat-input-0').type(user.username)
             cy.get('#mat-input-1').type(user.password)
             cy.contains('LOGIN').click()
        })
    })

    it('Login using hook- beforeEach', () =>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')    
             cy.get('#mat-input-0').type(userDetails.username)
             cy.get('#mat-input-1').type(userDetails.password)
             cy.contains('LOGIN').click()
        
    })

    it('Login using hook- beforeEach with regular function', function() {
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')    
             cy.get('#mat-input-0').type(this.userDetails1.username)
             cy.get('#mat-input-1').type(this.userDetails1.password)
             cy.contains('LOGIN').click()        
    })
})

describe('data driven login', ()=>{
    beforeEach(function() {
        cy.fixture('dtuser.json').as('userdata');
    })

    it('login using alias', function() {
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')    
             cy.get('#mat-input-0').type(this.userdata.username)
             cy.get('#mat-input-1').type(this.userdata.password)
             cy.contains('LOGIN').click()
    })
})