module.exports =  {
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: [
    "import"
  ],
  settings: {
    'import/resolver': {
      'webpack': { config: 'config/webpack.config.dev.js' }
    }
  },
  env: {
    jest: true
  },
  globals: {
    "document": false,
    "window": true
  },
  rules: {
    "import/no-named-as-default": [0],
    "import/no-extraneous-dependencies": [0, { "devDependencies": true }],
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "react/jsx-tag-spacing": [1],
    "jsx-a11y/label-has-for": [1],
    "react/jsx-boolean-value": [0],
    "react/no-array-index-key": [0]
    "react/destructuring-assignment": [<enabled>, 'never']
  }
}
