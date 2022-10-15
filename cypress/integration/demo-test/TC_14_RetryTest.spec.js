describe("Test retry", ()=>{
    Cypress.config({
        retries: {
            runMode: 2,
            openMode: 2,
        },
        });

    const retries = {
        runMode: 2,
        openMode: 2,
    };

    it("Retry Test", {retries},()=> {
        expect(1).to.be.eql(2)
    })
})