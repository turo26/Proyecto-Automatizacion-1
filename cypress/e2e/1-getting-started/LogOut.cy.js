describe('LogOut', () => {
    it('Salir de la sesion en SouceDemo.com', () => {
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

        // Hacer click en el boton de Menu
        cy.get('#react-burger-menu-btn\n').click()
            .wait(1000)

        // Hacer click en el boton de LogOut
        cy.get('#logout_sidebar_link').click()
            .wait(1000)

        //assertion
        cy.get('#root > div > div.login_logo').should('have.text','Swag Labs')
        cy.wait(4000)
    })
})