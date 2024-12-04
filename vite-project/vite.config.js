/* eslint-disable no-undef */
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.resolve(__dirname, "./test/setup.js"),
  },
});
