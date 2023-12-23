import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
