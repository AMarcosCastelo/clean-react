module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  },
  coveragePathIgnorePatterns: ['index.ts']
}
