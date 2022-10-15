

describe('Sample case using TS', ()=>{

    const login = (username:string,password:string):void=>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
        cy.get('.mat-input-0').type(username)
        cy.get('.mat-input-1').type(password)
        cy.contains('LOGIN').click()
    }

    it('login test',()=>{
        login('mandeep.sheoran@sitaaero', 'Machine@123')
    
    })
})