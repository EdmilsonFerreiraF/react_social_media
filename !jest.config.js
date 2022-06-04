module.exports = {
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
  },
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  testEnvironment: 'node',
  roots: [
    "<rootDir>"
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
