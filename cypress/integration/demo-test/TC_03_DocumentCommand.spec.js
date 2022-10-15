describe('doc command', () => {
    before('App login', () => {
        cy.visit('http://react-redux.realworld.io/#/login?_k=slovf7')
    })
    it('Page title using document command', () => {
        cy.document().should(doc => {
            let titlename = doc.title
            console.log(titlename)
            expect(titlename).to.be.eql('Conduit')

        })
    })

    it('Page title using cypress command', () => {
        cy.title().should(text => {
            expect(text).to.be.eql('Conduitt')
        })
    })

    it('Dimension using document command', () => {
        cy.document().should(doc => {
            const dc = Cypress.$(doc)
            console.log(dc.height())
            console.log(dc.width())
        })
    })
    it('Dimension using cypress command', () => {
        cy.viewport('ipad-2', 'portrait')
        cy.viewport(500, 700)
    })

    it('Cookies setting using document command', () => {
        cy.document().should(doc => {
            doc.cookie = "name=mandeep"
            console.log(doc.cookie)
            doc.cookie = "name=monika"
            console.log(doc.cookie)
        })
    })

    it('Cookies setting using cypress command', () => {
        cy.setCookie('name', 'mandeep')
        cy.getCookie('name')
        cy.getCookies()
        cy.clearCookie('name-')
        cy.clearCookies()
    })
})

