import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

export default defineConfig({
  build: { minify: false, modulePreload: { polyfill: false } },
  plugins: [solid()],
})
