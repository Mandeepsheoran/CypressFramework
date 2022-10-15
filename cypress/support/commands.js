// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://dev-ui.azure.digitaltwin.aero/login')
    cy.get('.mat-input-0').type(username)
    cy.get('.mat-input-1').type(password)
    cy.contains('LOGIN').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add('parentcommand', (name) => {
    cy.log(name)
})

Cypress.Commands.add('childcommand',{prevSubject:true}, (name)=>{
    cy.log(name);
})

Cypress.Commands.add('childcommandele',{prevSubject:Element}, (prvsub)=>{
        cy.log(prvsub.length)
})

Cypress.Commands.add('dualcommand', {prevSubject:"optional"},(ele) =>{
    if(ele){
        cy.log('This is child command')
        cy.log(ele.length)
    } else {
        cy.log('This is parent command')
    }
})

Cypress.Commands.add('getText', {prevSubject:Element},(ele)=>{
    return ele.text();
})

Cypress.Commands.add('getCellValue', (row, col)=>{
    cy.get(`table#table1>tbody>tr:nth-child(${row})>td:nth-child(${col})`).then(el =>{
        cy.wrap(el.text())
    })
})

//Get the body of iframe
Cypress.Commands.add('getIframe', {prevSubject: Element}, (frame)=>{
    return new Cypress.Promise(resolve=>{
        frame.ready(()=>{
            resolve(frame.contents().find('body'));
        })
    })
})

