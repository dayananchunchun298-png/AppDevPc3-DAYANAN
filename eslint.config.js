// ESLint 10 flat config - basic rules to reduce yellow/warnings
module.exports = [
  {
    ignores: ['**/node_modules/**', '**/android/**', '**/ios/**', '**/.git/**', '**/build/**', '**/__tests__/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        __DEV__: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        Promise: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        global: 'readonly',
        exports: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-shadow': 'warn',
    },
  },
];
