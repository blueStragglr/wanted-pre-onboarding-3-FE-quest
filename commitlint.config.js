module.exports = {
  extends: ['gitmoji'],
  rules: {
    'header-max-length': [0, 'always', 100],
    'type-enum': [2, 'always', ['feat', 'fix', 'test', 'refactor', 'style', 'docs', 'chore']],
  },
};
