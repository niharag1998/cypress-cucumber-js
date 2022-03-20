describe("Login Functionality", () => {
    before(() => {
        cy.wrap([
            {
                name: "Nihar"
            },
            {
                name: "Patel"
            }
        ]).as("websiteName")
    })
    
    it('first test', () => {
        cy.get('@websiteName').each((wags) => {
            cy.log(wags)
        })
    })
})