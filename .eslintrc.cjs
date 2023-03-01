module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "lastest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "react-hooks",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "on",
    "@typescript-eslint/explicit-function-return-type": "on",
    "@typescript-eslint/explicit-module-boundary-types": "on",
    "@typescript-eslint/no-explicit-any": "on",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "warn", {
        "endOfLine": "auto",
        "sigleQuote": true
      }
    ]
  }
}