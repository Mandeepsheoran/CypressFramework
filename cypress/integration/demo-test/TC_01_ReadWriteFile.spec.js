describe('Read Write File', ()=>{
    
    it('Write file', ()=>{
        cy.writeFile('samplefile.txt', "Mandeep Sheoran")
        cy.writeFile('samplefile.txt', "Kaju Sheoran", {flag : "a+"})
    })

    it('Read file', ()=> {
        cy.readFile('samplefile.txt').should('include', 'Mandeep SheoranKaju Sheoran')
    })
})