import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:3300",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: false,
    fixturesFolder: false,
    video: false,
    screenshotOnRunFailure: false,
    viewportWidth: 1280,
    viewportHeight: 900,
  },
});
