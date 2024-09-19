describe('Checkout y Ver Orden', () => {
    it('Ir a Checkout y Ver Orden y ver la orden en saucedemo.com', () => {
        cy.visit("https://www.saucedemo.com/")
        //Ingreso de nombre de usuario en el Log In
        cy.get('#user-name').click()
            .wait(2000)
            .type('standard_user')

        //Ingreso de la Contraseña del usuario en el Log In
        cy.get('#password').click()
            .wait(2000)
            .type('secret_sauce')

        // Hacer click en el boton de Login
        cy.get('#login-button').click()
            .wait(2000)

        // Hacer click en el boton Add to Cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
            .wait(2000)

        // Hacer click en el boton del Icon del carrito
        cy.get('#shopping_cart_container > a').click()
            .wait(2000)

        // checkout click
        cy.get('#checkout').click()
            .wait(2000)

        //llenar formulario

        cy.get('#first-name').click()
            .wait(2000)
            .type('Brandon')

        cy.get('#last-name').click()
            .wait(2000)
            .type('Ramirez')

        cy.get('#postal-code').click()
            .wait(2000)
            .type('20112')


        //continue
        cy.get('#continue').click()
            .wait(2000)
        //finish
        cy.get('#finish').click()
            .wait(2000)
        //assertion
        cy.get('#back-to-products').should('have.text','Back Home')
        cy.wait(3000)







    })
})