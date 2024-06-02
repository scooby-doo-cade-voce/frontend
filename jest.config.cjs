module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', 
    '^.+\\.(t|j)sx?$': 'ts-jest',  
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};