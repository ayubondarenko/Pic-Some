module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "it": true,
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-wrap-multilines": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-indent-props": "off",
    "react/button-has-type": "off",
    "comma-spacing": "off",
    "eol-last": "off",
    "import/extensions": "off",
    "no-console": "off",
    "indent": "off",
    "no-tabs": "off",
    "space-in-parens": "off",
    "import/prefer-default-export": "off",
    "comma-dangle": "off",
    "react/forbid-prop-types": "off",
    "object-curly-spacing": "off",
    "react/jsx-curly-spacing": "off",
    "arrow-parens": "off",
  }
};
