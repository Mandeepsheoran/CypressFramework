//const cypress = require("cypress");
//const { describe } = require("mocha");

describe.skip('Browser comnds', function() {
    before('Application URL', () => {
        cy.visit('http://react-redux.realworld.io/#/login?_k=slovf7')
    })

    //Disabled this reload test as it was rerunning all the test cases again and again.
it.skip('Reload using Cy and Window menthods', function() {
    //Browser reload using browser window method and respective cypress method
    cy.reload();
    window.location.reload()
   
})

it.skip('Hash location using Cy and Window methods', ()=>{
     //Hash method to get part of URL after hostname using browser window method and respective cypress method
     cy.hash()
     window.location.hash
})

it.skip('Browser Page navigation using Cy and Window methods', ()=>{
    //Browser page navigation using browser window method and respective cypress method
    cy.go(-1)
    window.history.back()
    cy.go(1)
    window.history.forward()
})

it.skip('Local/session storage using Cy and Window menthods', ()=>{
     //Browser session storage cases using browser window method and respective cypress method
     // Window has two methods but cypress has only one method for this
     cy.clearLocalStorage()
     window.localStorage
     window.sessionStorage  
})

})