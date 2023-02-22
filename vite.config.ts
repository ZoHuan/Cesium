import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import cesium from "vite-plugin-cesium"; // 引入插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cesium()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  base: '/Cesium'
});
