import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: "0.0.0.0",
    allowedHosts: [
      "localhost",
      "odyssey.remote-cda4.wilders.dev",
      "remote-cda4.wilders.dev",
    ],
  },
  server: {
    port: 4173,
  },
});
