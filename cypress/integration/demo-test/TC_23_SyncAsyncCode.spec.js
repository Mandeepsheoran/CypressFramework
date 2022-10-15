describe('asyc-syc code example and understanding',()=>{
    it('async sync mix code',()=>{
        cy.visit('http://react-redux.realworld.io/#/login?_k=slovf7')
        console.log('First logger')
        cy.get('input[type="email"]').type('Mandeep@gmail.com')
        console.log('Second logger')
        cy.get('input[type="password"]').type('Mandeep@123')
        console.log('Third logger')
        cy.get('.btn').click()
        console.log('Fourth logger')
    })
})