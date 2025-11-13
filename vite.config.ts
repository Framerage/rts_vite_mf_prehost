import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "prehost_app",
      shared: ["react", "react-dom"],
      remotes: {
        // chat_app: "http://localhost:5001/rts_wss_chat/assets/chatEntry.js", //preview
        chat_app: "https://framerage.github.io/rts_chat/assets/chatEntry.js", //github repository
      },
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  base: "/rts_vite_mf_prehost",
  server: {
    open: "/rts_vite_mf_prehost",
    port: 3000,
    cors: false,
  },
});
