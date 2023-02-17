module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(png|pdf|svg|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|styl|less|sass|scss|svg)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['<rootDir>/**/*.test.(js|jsx|ts|tsx)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/', 'dist', 'build'],
};
