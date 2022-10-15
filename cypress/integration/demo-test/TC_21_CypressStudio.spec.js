describe('Manual code writing', ()=>{
    it('Manual code writing',()=>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
        cy.wait(15000)
        cy.get('#mat-input-0').type('mandeep.sheoran@sita.aero')
        cy.get('#mat-input-1').type('Machine@123')
       // cy.contains('LOGIN').click()
    })
})

describe('Cypress studio code', ()=>{
    it('Cypress Studio code writing',()=>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
        cy.wait(15000)
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#mat-input-0').clear();
        cy.get('#mat-input-0').type('mandeep.sheoran@sita.aero');
        cy.get('#mat-input-1').clear();
        cy.get('#mat-input-1').type('Machine@123');
      //  cy.get('.button-text').click();
      //  cy.get('.button-elements > .image-container').click();
      //  cy.get(':nth-child(6) > .options-section > .option-value > .ng-star-inserted').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
       // cy.get('.layout').click();
        /* ==== End Cypress Studio ==== */
    })
})