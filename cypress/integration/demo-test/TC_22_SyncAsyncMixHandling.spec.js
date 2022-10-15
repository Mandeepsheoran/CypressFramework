describe('asyc-syc code mix and understanding',()=>{
        it('async & sync code mix and how to hanlde it',()=>{
            cy.visit('http://react-redux.realworld.io/#/login?_k=slovf7')
        let arr =[];
        cy.get('a').each(el=>{
            arr.push(el.text())
        }).then(()=>{
            console.log('Length of array is: ${arr.length}')
        console.log('Anchor tag text string: ${arr.join(",")}')
        })
        })
})