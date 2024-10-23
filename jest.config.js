module.exports = {
  // Specify the test environment
  testEnvironment: "jsdom", // Use jsdom for testing React components

  // Specify the transformation process for JavaScript files
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transform JS and JSX files using babel-jest
  },

  // Define patterns for modules that should not be ignored during transformation
  transformIgnorePatterns: [
    // Do not ignore the specified packages; allow them to be transformed
    "/node_modules/(?!(msw|axios|some-other-package)/)", // Include axios and msw
  ],

  // Mock CSS and image imports for tests
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mock CSS imports
    "\\.(gif|ttf|eot|svg|jpg|jpeg|png)$": "jest-transform-stub", // Mock image imports
  },
};
