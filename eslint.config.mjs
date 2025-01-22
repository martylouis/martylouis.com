import typescriptEslint from '@typescript-eslint/eslint-plugin';
// import tailwindcss from "eslint-plugin-tailwindcss";
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import parser from 'astro-eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/.astro', '**/dist', '**/node_modules', '.prettierrc.mjs'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:astro/recommended',
    // "plugin:tailwindcss/recommended",
    'prettier'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      // tailwindcss,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: true,
      },
    },

    rules: {
      '@typescript-eslint/await-thenable': 'warn',

      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          disallowTypeAnnotations: false,
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/consistent-type-exports': 'error',

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-import-type-side-effects': 'warn',

      '@typescript-eslint/no-misused-promises': [
        2,
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],

      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/restrict-plus-operands': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      'astro/no-deprecated-getentrybyslug': 'warn',
      'no-empty': 'off',
      'no-undef': 'off',
      // "tailwindcss/classnames-order": "on",
      // "tailwindcss/migration-from-tailwind-2": "off",
      // "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    files: ['**/*.astro'],

    languageOptions: {
      parser: parser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: '@typescript-eslint/parser',
      },
    },

    rules: {},
  },
];
