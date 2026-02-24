import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import unicorn from 'eslint-plugin-unicorn'
import checkFile from 'eslint-plugin-check-file'
import importX from 'eslint-plugin-import-x'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  { ignores: ['dist/**', 'tailwind.config.js'] },

  js.configs.recommended,
  prettierConfig,

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      unicorn,
      'check-file': checkFile,
      'import-x': importX,
      prettier,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],

      'check-file/folder-naming-convention': ['error', { 'src/**/': 'KEBAB_CASE' }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      ...reactHooks.configs.recommended.rules,
      'react/self-closing-comp': ['error', { component: true, html: false }],
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never', propElementValues: 'always' },
      ],
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-no-useless-fragment': 'error',

      ...unicorn.configs['flat/recommended'].rules,
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': ['error', { cases: { kebabCase: true, pascalCase: true } }],

      'no-constant-binary-expression': 'error',
    },
  },
]
