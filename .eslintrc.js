module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "rules": {
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "block-scoped-var": 2,
    "eqeqeq": 2,
    "no-var": 2,
    "semi": 1,
    "no-unused-vars": 2,
    "prefer-const": 2,
    "prefer-spread": 1,
    "space-before-blocks": 1,
    "generator-star-spacing": 1,
    "object-shorthand": 1,
    "arrow-parens": [1, "as-needed"],
    "no-await-in-loop": 1,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2
  }
}