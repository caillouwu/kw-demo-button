import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
        // fileName: "index",
        // entry: "src/index.ts",
        entry: "src/my-element.ts",
        formats: ["es"],
    },
    rollupOptions: {
      // external: /^lit/
    },
  },
});
