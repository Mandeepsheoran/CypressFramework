describe('custom command', ()=> {

    it('Simple parent command', ()=>{
        cy.parentcommand('Mandeep - Parent command')
    })

    it('Çhild command', ()=>{
        cy.wrap('Kaju-Child command').childcommand()
    })

    it('Çhild command- Option=Element', ()=>{
        cy.wrap('Element-Child command').childcommandele()
    })

    it('Dual command', ()=>{
        cy.visit('https://www.google.com');
        cy.get('input').dualcommand()
        cy.dualcommand()
    })

    it('get text method', ()=>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login');
        cy.get('.forgot-pass').getText().then(cy.log)
    })

    it('get table cell value', ()=> {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.getCellValue(2,3).then(cy.log)
    })

    it('iframe handling', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').getIframe().clear().type('Mandeep Sheoran')
    })
})
