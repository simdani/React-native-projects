module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: ["react", "react-native"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    jest: true,
    "react-native/react-native": true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-raw-text": 2,
    quotes: [2, "double", { avoidEscape: true }],
    "object-curly-newline": "off",
    "import/prefer-default-export": "off",
    "arrow-parens": "off",
    "implicit-arrow-linebreak": "off"
  },
  globals: {
    fetch: false
  }
};
