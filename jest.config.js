/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: [ './jest.setup.js' ],
};