module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],
    'semi': [2, 'never'],
  }
}
