import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import parser from "astro-eslint-parser"
import astroPlugin from "eslint-plugin-astro"
import tailwindcss from "eslint-plugin-tailwindcss"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ["**/.astro", "**/dist", "**/node_modules"],
  },
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:astro/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint,
      tailwindcss,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        project: true,
      },
    },

    rules: {
      "@typescript-eslint/await-thenable": "warn",

      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          disallowTypeAnnotations: false,
          fixStyle: "inline-type-imports",
        },
      ],

      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-import-type-side-effects": "warn",

      "@typescript-eslint/no-misused-promises": [
        2,
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],

      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/restrict-plus-operands": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "astro/no-deprecated-getentrybyslug": "warn",
      "no-empty": "off",
      "no-undef": "off",
      "tailwindcss/classnames-order": "off",
      "tailwindcss/migration-from-tailwind-2": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    files: ["**/*.astro"],
    // Enable this plugin
    plugins: astroPlugin,
    // env: {
    //   // Enables global variables available in Astro components.
    //   node: true,
    //   "astro/astro": true,
    //   es2020: true,
    // },

    languageOptions: {
      parser: parser,
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        // Enable recommended rules
        extraFileExtensions: [".astro"],
        parser: "@typescript-eslint/parser",
        // The script of Astro components uses ESM.
        sourceType: "module",
      },
    },

    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",

      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
  {
    // Define the configuration for `<script>` tag when using `client-side-ts` processor.
    // Script in `<script>` is assigned a virtual file name with the `.ts` extension.
    files: ["**/*.astro/*.ts", "*.astro/*.ts"],
    // env: {
    //   browser: true,
    //   es2020: true,
    // },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
      project: null,
    },
    rules: {
      // override/add rules settings here, such as:
      // "no-unused-vars": "error"

      // If you are using "prettier/prettier" rule,
      // you don't need to format inside <script> as it will be formatted as a `.astro` file.
      "prettier/prettier": "off",
    },
  },
]
