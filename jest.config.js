/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    '^@/(.*)$': '<rootDir>/$1',
    // '^react-dnd$': 'react-dnd/dist/cjs',
    //     '^react-dnd-html5-backend$': 'react-dnd-html5-backend/dist/cjs',
    //     '^dnd-core$': 'dnd-core/dist/cjs',
  },
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    // "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts"
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
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!(firebase|uuid|@firebase))`],
  testEnvironmentOptions: {
    url: "http://localhost/"
  },
  // extensionsToTreatAsEsm: [".ts"],
  // globals: {
  //   "ts-jest": {
  //     "useESM": true
  //   }
  // }
};