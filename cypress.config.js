
  const { defineConfig } = require('cypress');
  
  module.exports = defineConfig({
      e2e: {
          baseUrl: 'https://staging.trymima.com/',
          viewportHeight: 960,
          viewportWidth: 1520,
          experimentalWebKitSupport: true,
          defaultCommandTimeout: 10000,
          chromeWebSecurity: false,
          includeShadowDom: true,
          setupNodeEvents(on, config) {
            // implement node event listeners here
          },
      },
  });
      