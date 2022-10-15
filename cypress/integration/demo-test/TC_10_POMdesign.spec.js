import login from "../../../Pages/PageClasses/loginpage.js"

describe('POM pattern in Cypress', ()=>{
    it('Pick data from Page class', () =>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
        cy.fixture('dtuser.json').then((user) => {
            login.getusername().toMatchImageSnapshot()
            login.getusername().type(user.username)
             login.getpassword().type(user.password)
             login.getloginButton().click()
        })
    })

    it('Pick data from Page JSON', () =>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
        const login = require('../../../Pages/PageJSON/loginpage')
        cy.fixture('dtuser.json').then((user) => {
             cy.get(login.username).type(user.username)
             cy.get(login.password).type(user.password)
             cy.contains(login.loginbutton).click()
        })
    })
})