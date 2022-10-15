describe('Accessibility testing', ()=>{
    before(()=>{
        cy.visit('http://127.0.0.1:5500/HelpFolder/differentDropDownTypes.html')
        cy.injectAxe()
    })

    //Some test cases will fail as application is not as per WCAG guidelines
    it('Axe library- Full page Scan', ()=>{
        cy.checkA11y();
    })

    it('Axe library- Specific part of page Scan', ()=>{
        cy.checkA11y("input");
    })

    it('Axe library- Ignoring some of part for Scan', ()=>{
        cy.checkA11y({ exclude :["input"]});
    })

    it('Axe library- Ignoring some WCAG rule in testing', ()=>{
        cy.checkA11y(null, {
            rules : {
                 "region" : {enabled:false}
            }
         } );
    })
})