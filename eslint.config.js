import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    settings: {
      react: {
        version: 'detect',    // Automatically detect the version of React to use
      },
    },
    plugins: {
      react,                // React plugin for linting React code (activates eslint-plugin-react)
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: [
      js.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],   // this changes the error to a warning
      'react/prop-types': 'off',     // this suppresses warnings about not using prop-types

      'react/jsx-uses-react': 'off', 
      'react/react-in-jsx-scope': 'off',  // these two rules are not needed with React 17 and above
      'react/jsx-filename-extension':['warn', {extensions: ['.jsx']}], // a rule to warn about using .jsx files
    },
  },

])
