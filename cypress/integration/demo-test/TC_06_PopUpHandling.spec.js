describe('Popup handling', () => {

it('Alert hanlding-Single Alert Popup', () =>{
    cy.visit('http://127.0.0.1:5500/HelpFolder/differentalertpage.html')
    cy.on('window:alert', alerttext => {
        expect(alerttext).to.be.eql('I m Alert Box')
    })
    cy.get('button#alert').click()
});

it('Alert hanlding-Multi Alert Popup', () =>{
    cy.visit('http://127.0.0.1:5500/HelpFolder/differentalertpage.html')
  const fn = cy.stub()
  cy.on('window:alert', fn)
  cy.get('button#miltiplealert').click().then(() =>{
    expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box')
    expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
    expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')
  })
});

it('Confirm popup handling-window alert confirm', () =>{
    cy.visit('http://127.0.0.1:5500/HelpFolder/differentalertpage.html')
    cy.on('window:confirm', context => {
        expect(context).to.be.eql('I m confirm Box')
        //return false      // false will click on the cancel button and true on ok, default valu eis true
    })
    cy.get('button#confirm').click()
});

it('Prompt alert', () =>{
    cy.visit('http://127.0.0.1:5500/HelpFolder/differentalertpage.html')
   cy.window().then(win => {
    const stubs=cy.stub(win,'prompt')
    stubs.returns('Mandeep')
    cy.get('button#prompt').click()
   })
});

it('Window pop up', () => {
    const pop_url = "https://www.youtube.com/c/qaboxletstest/"
    cy.window().then(win => {
        const stub = cy.stub(win, 'open').as('windowopen')
    })
    cy.get('button#winpop').click()
    cy.get('@windowopen').should('be.calledWith', pop_url)
    cy.window().then(win => {
        win.location.href = pop_url
        cy.get('input#search').type('Cypress by qa box lets test{enter}')
    })
});
})