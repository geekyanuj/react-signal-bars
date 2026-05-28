import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],

  build: {
    target: "esnext",

    lib: {
      entry: "src/index.js",
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
});