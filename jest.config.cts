
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  }
  ,
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.jsx",
  },
};
