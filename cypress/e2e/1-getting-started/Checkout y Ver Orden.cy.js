describe('Checkout y Ver Orden', () => {
    it('Ir a Checkout y Ver Orden y ver la orden en saucedemo.com', () => {
        cy.visit("https://www.saucedemo.com/")
        //Ingreso de nombre de usuario en el Log In
        cy.get('#user-name').click()
            //.wait(1000)
            .type('standard_user')

        //Ingreso de la Contraseña del usuario en el Log In
        cy.get('#password').click()
            //.wait(1000)
            .type('secret_sauce')

        // Hacer click en el boton de Login
        cy.get('#login-button').click()
            .wait(1000)

        // Hacer click en el boton Add to Cart
        cy.get('#add-to-cart-sauce-labs-backpack').click()
            .wait(1000)

        // Hacer click en el boton del Icon del carrito
        cy.get('#shopping_cart_container > a').click()
            .wait(1000)

        //assertion
        cy.get('#item_4_title_link > div').should('have.text','Sauce Labs Backpack')
        cy.wait(4000)
    })
})