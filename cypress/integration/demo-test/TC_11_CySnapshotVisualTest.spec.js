import login from "../../../Pages/PageClasses/loginpage.js"

describe('Visual testing using Cypress Snapshot', ()=>{
    it('Pick data from Page class', () =>{
        cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
        cy.fixture('dtuser.json').then((user) => {
            cy.document().toMatchImageSnapshot()
            login.getusername().toMatchImageSnapshot()
            login.getusername().type(user.username)
             login.getpassword().type(user.password)
            // login.getloginButton().click()
        })
    })
})