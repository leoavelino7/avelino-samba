module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/index.ts'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  clearMocks: true,
};
