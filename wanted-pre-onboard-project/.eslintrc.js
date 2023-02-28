module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin: prettier/react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
