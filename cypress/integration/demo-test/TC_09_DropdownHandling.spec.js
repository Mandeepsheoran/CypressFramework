describe("Dropdown handling", ()=>{
    before('website visit', ()=>{
        cy.visit('http://127.0.0.1:5500/HelpFolder/differentDropDownTypes.html')
    })

    it('Select dropdown using JS,JQuery,Cypress', ()=>{
        //Normal JS way of handling
        cy.get('#speed').select('Slow').should($el =>{
            const el =$el[0]
            expect(el.options[el.selectedIndex].value).to.eql('2')
            expect(el.options[el.selectedIndex].text).to.eql('Slow')   
        })
      //  cy.get('#speed').should('have.text', 'Slow')

        //JQuery Way
        cy.get('#speed').select('Slow').should(($el) =>{
           expect ($el.val()).to.eql('2')
           expect($el.find("option:selected").text()).to.eql('Slow') 
        })

        //Cypress Way of handling
        cy.get('#speed').select('Slow').find('option:selected').as('selectedvalue')
        cy.get('@selectedvalue').invoke('text').should('eq','Slow')
        cy.get('@selectedvalue').invoke('val').should('eq','2')
    })

    //This is not available on current HTML file itself but below code work in realtime, skipping it as of now
    it.skip('Select autocomplete- dropdown', ()=>{
        cy.get('#myInput').type('indi{downarrow}{enter}').blur().should('have.value', 'India')
    })


it('Select multi value from dropdown', ()=>{
    cy.get('#cselect').select(['India', 'Russia'])
    .invoke('val').should('deep.equal', ['Russia', 'India'] )

    cy.get('#cselect').select(['India', 'Russia']).find('option:selected')
    .invoke('text').should('deep.equal', ['Russia', 'India'].join("") )
})

//This is not available on current HTML file itself but below code work in realtime, skipping it as of now
it.skip('DT type multi select and delete', ()=>{
    //Select muliple by keyboard
    cy.get('#dropdown').type('Russia{enter}').type('India{enter}').type('Nepal{enter}');
    //Validating selected values
    cy.get('#mselected').invoke('val').should('have.value', ['Russia', 'India', 'Nepal']);
    //Deleting selected values
    cy.get('li.search-coice span:contains("Russia")').next('a').click();
   
})
})