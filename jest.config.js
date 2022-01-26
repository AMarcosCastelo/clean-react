module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'node',
  transform: {
    '.*\\.(js|jsx|ts|tsx)$': 'ts-jest'
  }
}
