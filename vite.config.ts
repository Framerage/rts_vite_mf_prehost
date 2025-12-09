import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "prehost_app",
      shared: ["react", "react-dom"],
      filename: "prehost_appEntry.js",
      remotes: {
        // chat_app: "http://localhost:5001/rts_wss_chat/assets/chatEntry.js", //preview
        chat_app: "https://framerage.github.io/rts_chat/assets/chatEntry.js", //github repository
        child_main_page:
          "https://framerage.github.io/rts_vue_mf_extra/assets/chatEntry.js", //gh rep
      },
      exposes: {
        "./store/useAuthStateSelector": "./src/store/hooks.ts",
      },
    }),
  ],

  resolve: {
    //temp comment before architecture of project
    alias: {
      //   assets: "/src/assets",
      //   api: "/src/api",
      components: "/src/components",
      //   hooks: "/src/hooks",
      //   helpers: "/src/helpers",
      //   modules: "/src/modules",
      pages: "/src/pages",
      //   styles: "/src/styles",
      store: "/src/store",
      types: "/src/types",
      //   typings: "/src/typings",
      utils: "/src/utils",
      //   constants: "/src/constants",
    },
  },
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
  // base: HOME_URL,
  server: {
    // open: HOME_URL,
    open: "/rts_vite_mf_prehost",
    port: 3000,
    cors: false,
  },
});
