module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '**/*.d.ts'],
  coverageDirectory: '<rootDir>/coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(js|jsx|ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  },
  coveragePathIgnorePatterns: ['index.ts']
}
