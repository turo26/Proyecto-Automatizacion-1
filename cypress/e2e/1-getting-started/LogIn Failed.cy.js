describe('LogIn Failed', () => {
    it('Log In negativo en SouceDemo.com', () => {
        cy.visit("https://www.saucedemo.com/")

        //Ingreso de nombre de usuario en el Log In, de FORMA INCORRECTA
        cy.get('#user-name').click()
            //.wait(1000)
            .type('standard_userX')

        //Ingreso de la Contraseña del usuario en el Log In
        cy.get('#password').click()
            //.wait(1000)
            .type('secret_sauce')

        // Hacer click en el boton de Login
        cy.get('#login-button').click()
            .wait(1000)

        //assetion, comprueba que en pantalla se muestre el mensaje de error
        cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('have.text',
            'Epic sadface: Username and password do not match any user in this service')
        cy.wait(4000)
    })
})