describe("Different cy configs", { baseUrl: "http://www.facebook.com"}, ()=>{
   Cypress.config("baseUrl", "http://www.twitter.com");

it("config", {baseUrl : "http://www.google.com"}, ()=>{
    cy.visit("/")
});
})