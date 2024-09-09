/// <reference types="vitest" />
import { defineConfig } from "vite";

// Configure Vite (https://vitejs.dev/config/)
// Configure Vitest (https://vitest.dev/config/)
export default defineConfig({
  build: {
    lib: {
      fileName: "index",
      entry: "src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      // external: /^lit/
    },
  },
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    // Lit recommends using browser environment for testing
    // https://lit.dev/docs/tools/testing/#testing-in-the-browser
    browser: {
      enabled: true,
      name: "chrome",
      provider: "webdriverio",
    },
  },
});
