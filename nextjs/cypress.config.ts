import { defineConfig } from 'cypress';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...process.env,
        ...config.env,
      };

      return config;
    },
  },
});
