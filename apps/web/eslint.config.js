import { nextJsConfig } from "@workspace/eslint-config/next-js";
import drizzle from "eslint-plugin-drizzle";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,
  {
    plugins: {
      drizzle
    }
  }
]
