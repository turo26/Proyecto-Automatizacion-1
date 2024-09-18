describe('LogIn SouceDemo', () => {
    it('Ir a la pagina Log In en SouceDemo.com', () => {
        cy.wait(5000)
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

        //assetion, comprueba que en pantalla se muestre el mensaje de exito
        cy.get('#header_container > div.primary_header > div.header_label > div').should('have.text', 'Swag Labs')
        cy.wait(4000)


    })
})