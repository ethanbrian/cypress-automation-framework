const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "q4m7pu",
  defaultCommandTimeout: 10000,
  responseTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
  },
});
