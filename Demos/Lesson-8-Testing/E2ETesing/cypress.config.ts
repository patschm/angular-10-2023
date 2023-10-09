import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      on('before:spec', (spec)=>{
        console.log("Start test " + spec.name);
      });
    },
  },
});
