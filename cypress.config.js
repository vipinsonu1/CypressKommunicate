const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zk4yy6',
  e2e: {

    baseUrl: 'https://api-test.kommunicate.io/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
