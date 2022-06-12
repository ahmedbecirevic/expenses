module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
    //     "plugin:jsx-a11y/recommended",
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  //   plugins: ["react", "jsx-a11y"],
  rules: {
    //     "no-unused-vars": 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    //     "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    //     quotes: [2, "double", { avoidEscape: true }],
    'react/prop-types': 0,
    //     "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
//   settings: { react: { version: "detect" } },
//   overrides: [{ files: ["*.jsx", "*.js"] }],
};
