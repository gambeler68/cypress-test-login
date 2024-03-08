

/// <refrence types = *cypress* />
describe('type information user',()=>{
    it('usre' ,()=>{
        cy.visit("sigup/sigup.html")
        cy.get('#email').type("saeedzandi29@gmail.com")
        cy.get("#firstname").type("saeid")
        cy.get("#lastname").type("zandi")
        cy.get("#birthdate").click()
        cy.get("#phone").should('have-lenght',11).type("09384281111")
        cy.get('#password').should('have-lenght',8).type('123456')


    })

})
