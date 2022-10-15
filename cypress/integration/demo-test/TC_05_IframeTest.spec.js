describe('iframe methods', () => {

  it('Type into element inside a frame', () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/iframePage.html')
    cy.get('input[name="Channel Name"]').clear().type('NDTV')
 });

    it("iframe- Java script way", () => {
      cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').within(frm => {
        const [iframedom]=frm.get()
        iframedom.contentDocument.body.getElementsByTagName('p')[0].textContent= 'Mandeep Sheoran'
      })
    })

    it("iframe- JQuery way", () => {
      cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('iframe#mce_0_ifr').within(($frm) => {
        const ifram=$frm.contents().find('body#tinymce')
        cy.wrap(ifram).clear().type('Mandeep Sheoran')
      })
    })
})