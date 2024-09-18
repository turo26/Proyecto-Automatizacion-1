describe('Agregar al carrito', () => {
    it('Agregar un articulo en SouceDemo.com', () => {
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

        //Assertion
        cy.get('#shopping_cart_container > a').should('be', 1)
        to.equal(1)
    })
})