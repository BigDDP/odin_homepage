import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
    hmr: true,
  },
  plugins: [
    tanstackStart({ srcDirectory: "./app" }),
    react(),
    tailwindcss(),
    {
      name: "force-full-reload",
      handleHotUpdate({ server }) {
        server.ws.send({ type: "full-reload" });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
});