module.exports = {
  transform: {
    '\\.[jt]s?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'json'],
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist'],
}
