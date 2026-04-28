import process from "node:process"

import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/index.ts", "src/*.worklet.ts"],
  outDir: "dist",
  deps: {
    neverBundle: [
      "pkg/worklet/capture?worker",
      "pkg/worklet/capture?worker&url",
    ],
  },

  env: {
    NODE_ENV: process.env.NODE_ENV ?? "production",
    DEV: process.env.NODE_ENV === "development",
    PROD: process.env.NODE_ENV === "production",
    TEST: false,
  },

  platform: "node",
  format: "esm",
  dts: true,
  fixedExtension: true,

  minify: "dce-only",
})
