const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html',  // Carpeta donde se guardan los resultados
    overwrite: false,              // No sobrescribir reportes anteriores
    html: true,                    // Generar reporte en HTML
    json: true                     // Generar reporte en JSON
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});



