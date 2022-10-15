describe('Visual test using cypress snapshot plugin', ()=> {
    
    beforeEach(()=>{
        cy.log('test started')
        cy.visit('http://127.0.0.1:5500/visualtesting.html')
        cy.wait(1000)
    })

    it.only('Full page snapshot using cypress snapshot'), ()=>{
        cy.log('test started')
        cy.document().toMatchImageSnapshot()
    }

    it('Specific element snapshot using cypress snapshot'), ()=>{
        cy.get('canvas').toMatchImageSnapshot()
    }
})