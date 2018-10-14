module.exports = {
  roots: ['<rootDir>/__tests__'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/__tests__/**/**/*.test.{js,jsx,ts,tsx}'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/**/*.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupEnzyme.ts',
};
