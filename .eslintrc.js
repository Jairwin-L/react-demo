module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["react", "@typescript-eslint"],
  // globals: {
  //   __DEV__: false,
  //   __dirname: false,
  //   window: true,
  //   define: true,
  //   history: true,
  //   location: true,
  //   wxjs: true,
  //   $: true,
  //   WeixinJSBridge: true,
  //   wx: true,
  //   process: true,
  //   qq: true,
  // },
  settings: {
    react: {
      version: "detect",
    },
    "editor.minimap.enabled": false,
    "explorer.autoReveal": false,
    "window.zoomLevel": 0,
    "prettier.eslintIntegration": true,
  },
  rules: {
    "react/display-name": 0,
    "react/react-in-jsx-scope": "off",
    quotes: [2, "double"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
