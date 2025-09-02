import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
// import docusaurus from '@docusaurus/eslint-plugin'; // https://github.com/facebook/docusaurus/issues/10490

export default defineConfig(
  // Global ignores (applies to all configs below)
  {
    ignores: ["build/**", "node_modules/**", ".docusaurus/**"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  //docusaurus.configs.recommended,
  // Project-specific overrides (applies to all file types)
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {},
  },
);
