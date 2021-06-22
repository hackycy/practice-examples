module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: ['plugin:vue/recommended', 'plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  rules: {
    'semi': [2, 'never'],
    'quotes': ['error', 'single'],
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
  },
}
