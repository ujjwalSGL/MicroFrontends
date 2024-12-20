import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        header_app: "http://localhost:4174/assets/header.js",
        footer_app: "http://localhost:4173/assets/footer.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5175,
  },
});
