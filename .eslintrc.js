module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  extends: ['airbnb'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-underscore-dangle': 'off',
  },
  plugins: ['jest'],
};
