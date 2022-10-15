describe('Network intercept', ()=>{
    beforeEach(()=>{
        cy.visit('http://127.0.0.1:5500/HelpFolder/intercept.html')
    })

    it('Spy- GET Using old server & route method in XHR request', ()=>{
        cy.server()
        cy.route('/users?*').as('useralias')
        cy.get('#loadThreeUsersXHR').click()
        cy.wait('@useralias').its('status').should('be.eq', 200)
        cy.get('#xhrusers > tbody>tr').should('have.length', 3)
    })

    it('Spy- POST Using old server & route method in XHR request', ()=>{
        cy.server()
        cy.route('POST','/users').as('useralias')
        cy.get('#xhrname').type('Mandeep Sheoran')
        cy.get('#xhremail').type('Mandeep@gmail.com')
        cy.get('#xhrbtn').click()
        cy.wait('@useralias').then(xhrreq=>{
            expect(xhrreq.status).to.eq(201)
            expect(xhrreq.response.body.name).to.eq('Mandeep Sheoran')
        })
        cy.get('#xhrspan').should('have.text','Successful : 11 - Mandeep Sheoran - Mandeep@gmail.com')
    })

    it('Stub- GET Using old server & route method in XHR request', ()=>{
        cy.server()
        cy.route('/users?*','fixture:interceptstubdata.json').as('useralias')
        cy.get('#loadThreeUsersXHR').click()
        cy.wait('@useralias').its('status').should('be.eq', 200)
        cy.get('#xhrusers > tbody>tr').should('have.length', 1)
    })

    it('Spy- GET Using new Intercept method in Fetch API', ()=>{
        cy.intercept({
            pathname: "/users",
            method: "GET",
            query: {
              _limit: "3",
            },
          }).as("users");
          cy.get("#loadThreeUsersFETCH").click();
          cy.wait("@users")
            .its("response.body")
            .should("have.length", 3);
          cy.get("#fetchusers > tbody >tr").should("have.length", 3);
    })

    it('Stub- GET Using new Intercept method in Fetch API', ()=>{
        cy.intercept(
            {
              pathname: "/users",
              method: "GET",
              query: {
                _limit: "3",
              },
            },
            {
              fixture: "interceptstubdata.json",
            }
          ).as("users");
          cy.get("#loadThreeUsersFETCH").click();
          cy.wait("@users")
            .its("response.body")
            .should('exist');
          cy.get("#fetchusers > tbody >tr").should("have.length", 1);
    })
})