describe('Web Element commands', function() {

it('Multiple click - Webelement command', function() {
    cy.visit("http://127.0.0.1:5500/HelpFolder/cypresscmmands.html")
    cy.get('fieldset#GETCOMMAND').within(div =>{
        cy.get('button').click({multiple:true})
    })
})

it('Single click - web element command', () => {
    cy.get('button').first().click() 
    cy.get('button').last().click()
    cy.get('button').eq(1).click()    // will click second index button
    cy.get('button').eq(-1).click()    // will click second last index button
})

it('Misc methods for web elements', () =>{
    //To move to last section and click/check all the buttons
    cy.get('fieldset#GETCOMMAND').children().last().find(':checkbox').check({multiple:true})
    //To move up and then find the button
    cy.get(':checkbox').parent().prev().find(":button").first().click()
    cy.reload()
    //To find the siblings of type checkbox
    cy.get(':checkbox').eq(2).siblings(':checkbox').check({multiple:true})
    cy.reload()
    //Find a button and check all these button
    cy.get(':button').each(btn => {
      //  btn.check({multiple:true})
        btn.hide()
    })
    cy.get('span').each(btn =>{
       console.log(btn.text)
    })
})
})