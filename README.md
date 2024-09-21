# Proyecto-Automatizacion-1
Este programa esta creado para probar de forma automatizada las principales funcionalidades de la pagina https://www.saucedemo.com/ como lo es el probar el Login, Logout, Agregar articulos al carrito, eliminar productos y hacer checkout de los productos agregadados. 
Este programa realiza un paso a paso de como se usaria el programa para asi poder validar que se tenga un funcionamiento correcto

**##Desarrolladores**
  * Brandon Ramirez
  * Arturo Romero

**## Requerimientos**
Para correr este programa se necesita instalar los siguiente: 
* [Aqua](https://www.jetbrains.com/es-es/aqua/)
* [Node] (https://nodejs.org/en/download/package-manager)

**## Configurar el ambiente y descargar dependencias**
Instalar el IDE aqua-2024.1.2
Instalar Cypress: Usando npm install cypress --save-dev.

**## Sistemas operativos compatibles**
- Windows 11 Pro 23H2
- Windows 10 22H2
- Mac OS Sonoma 14.2.1

**## Ejemplo de ejercicio ##**
describe('Prueba de login', () => {
  it('Debería permitir al usuario iniciar sesión con credenciales válidas', () => {
    // Visitar la página de login
    cy.visit('https://ejemplo.com/login');

    // Llenar el campo de usuario
    cy.get('#username').type('usuario_valido'); // Cambia el selector según tu estructura HTML

    // Llenar el campo de contraseña
    cy.get('#password').type('contraseña_valida'); // Cambia el selector según tu estructura HTML

    // Hacer clic en el botón de iniciar sesión
    cy.get('#login-button').click(); // Cambia el selector según tu botón de login

    // Verificar que el usuario haya iniciado sesión correctamente
    // Esto puede ser una redirección o un mensaje de bienvenida
    cy.url().should('include', '/dashboard'); // Verifica que se redirija a la página de dashboard

    // También puedes verificar si existe un mensaje de bienvenida, como:
    cy.contains('Bienvenido').should('be.visible'); // Cambia el texto según la página
  });
