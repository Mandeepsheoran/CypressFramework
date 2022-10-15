describe('Shadow dom', () => {
  
//Half cooked and not working
it.skip("Using Cypress Shadow method", () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/shadowdom.html')
  cy.get('div#shadowHost')
        .shadow()
        .type('Mandeep')
        .find('input#name').should('have.value', 'Mandeep')
})
//Half cooked and not working
it.skip('Using JQuery', ()=> {
    cy.visit('http://127.0.0.1:5500/HelpFolder/shadowdom.html')
    cy.get('div#shadowHost').should(e=>{
        const [dom]=e.get()
        dom.shadowRoot.getElementById('name').value = "Mandeep"
    })
})

//Half cooked and not working
it.skip('Using Config includeShadowDom', ()=> {
    cy.visit('http://127.0.0.1:5500/HelpFolder/shadowdom.html')
    //With config at Global level
    cy.get('h2').should('be.visible').contains('I belong to Shadow DOM')
    //With config at local level
    cy.get('h2',{includeShadowDom: true}).should('be.visible').contains('I belong to Shadow DOM')
})

//All below test are copied from GitHub
it('Assert H2 text within Light DOM', () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/shadowdom.html')
    cy.get('h2')
        .should('have.text', 'I belong to Regular/Light Dom')
});

it('Type to Textbox within Light DOM', () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/shadowdom.html')
    cy.get('input#channelname')
        .type('QA BOX LET\'S TEST')
        .should('have.value', 'QA BOX LET\'S TEST')
});

it('Assert H2 text within Shadow DOM', () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/shadowdom.html')
    cy.contains('Add Shadow DOM').click()
    cy.get('div#shadowHost')
        .shadow()
        .find('h2')
        .should('have.text', 'I belong to Shadow DOM')
});

it('Type to Textbox within Shadow DOM', () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/shadowdom.html')
    cy.get('button').click()
    // cy.get('input#name')
    //     .type('QA BOX LET\'S TEST')
    //     .should('have.value', 'QA BOX LET\'S TEST')
    cy.get('div#shadowHost')
        .shadow()
        .find('input#name')
        .type('QA BOX LET\'S TEST')
        .should('have.value', 'QA BOX LET\'S TEST')
});

it.skip('External Website', () => {
    cy.visit('https://books-pwakit.appspot.com/')
    cy.get('book-app')
        .shadow()
        .find('app-toolbar input#input')
        .type('Software Testing')
});
//Currently not working, will look into this later
it.skip('Using jQuery', () => {
    cy.get('button').click()
    cy.get('div#shadowHost').should(e => {
        const [dom] = e.get()
        expect(dom.shadowRoot.querySelector('h2').textContent).to.eql('I belong to Shadow DOM');
        // dom.shadowRoot.querySelector('input#name').value = 'QA BOX LET\'S TEST'
        dom.shadowRoot.getElementById('name').value = 'QA BOX LET\'S TEST'
    })
});
//Currently not working, will look into this later
it.skip('Config includeShadowDom - equal to True', () => {
    cy.get('button').click()
    cy.get('h2')
        .contains('I belong to Shadow DOM')
        .should('be.visible')
    cy.get('input#name').type('QA BOX LET\'S TEST')
        .should('have.value', 'QA BOX LET\'S TEST')
});
//Currently not working, will look into this later
it.skip('Config includeShadowDom equal to True as option', () => {
    cy.get('button').click()
    cy.get('h2', { includeShadowDom: true })
        .contains('I belong to Shadow DOM')
        .should('be.visible')
    cy.get('input#name', { includeShadowDom: true }).type('QA BOX LET\'S TEST')
        .should('have.value', 'QA BOX LET\'S TEST')
});

it.skip('External Website - Config includeShadowDom	equal to True', () => {
    cy.visit('https://books-pwakit.appspot.com/')
    cy.get('book-app')
        .find('app-toolbar input#input')
        .type('Software Testing')
})
})