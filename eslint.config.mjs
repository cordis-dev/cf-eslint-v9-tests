export default {
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  
  // Specifies environments
  env: {
    browser: true, // Browser global variables
    node: true, // Node.js global variables and Node.js scoping
    es2021: true // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
  },
  
  // Extends from a set of predefined configurations
  extends: [
    'eslint:recommended' // Extends the set of rules recommended by ESLint
  ],
  
  // Custom rules configuration
  rules: {
    'eqeqeq': 'warn', // Require the use of === and !==
    'no-unused-vars': 'warn', // Warns about variables that are declared but not used
    'no-console': 'off' // Turns off the rule that disallows the use of console.log
  }
};
