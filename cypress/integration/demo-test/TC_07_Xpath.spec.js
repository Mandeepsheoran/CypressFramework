describe('xpath selector', () =>{
    before(() => {
        cy.visit("http://127.0.0.1:5500/HelpFolder/cyxapth.html");
      });

    it('get & within', () =>{
        cy.get("fieldset#groupone input[name='Channel Name']").type("NDTV")

        cy.get("fieldset#grouptwo").within(() =>{
            cy.get("input[name='Channel Name']").type("AAJ TAK")
        })
    })

    it('Xpath & Within', () => {
        cy.xpath("//fieldset[@id='groupone']//input[@name='Channel Name']").type('NDTV')

        cy.xpath("//fieldset[@id='groupone']").within(() => {
            cy.xpath(".//input[@name='Channel Name']").type('AAJ TAK')
        })

        cy.xpath("//fieldset[@id='groupone']").xpath(".//input[@name='Channel Name']").type('NDTV')
    })
})