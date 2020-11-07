module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "warn",
    "max-lines": ["warn", 200],
    "arrow-body-style": ["warn", "as-needed"],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/camelcase": "off",
    "react/display-name": "off",
  },
  ignorePatterns: ["serviceWorker.ts", "metro.config.js"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
