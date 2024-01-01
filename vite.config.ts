import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import image from "@rollup/plugin-image";

// Add the rollup plugin for image handling

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...image(),
      enforce: "pre",
    },
    {
      name: "vite-tsconfig-resolver",
    },
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  define: {
    __dirname: JSON.stringify(new URL(".", import.meta.url).pathname),
  },
});
