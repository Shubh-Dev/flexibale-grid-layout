export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss|sass|less)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
