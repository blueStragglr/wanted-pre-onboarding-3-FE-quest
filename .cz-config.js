module.exports = {
  types: [
    { name: 'feat \t\t✨ 기능추가', value: '✨ feat' },
    { name: 'fix \t\t🐛 버그픽스', value: '🐛 fix' },
    {
      name: 'test \t\t✅ 테스트 코드 추가',
      value: '✅ test',
    },
    {
      name: 'refactor \t🔨 리팩터링',
      value: '🔨 refactor',
    },
    {
      name: 'style \t💄 스타일 추가 및 수정',
      value: '💄 style',
    },
    { name: 'docs \t\t📝 문서 업데이트', value: '📝 docs' },
    {
      name: 'chore \t🔧 빌드 및 구조 수정',
      value: '🔧 chore',
    },
  ],
  scopes: [
    'component',
    'css-style',
    'custom-hook',
    'store',
    'util',
    'api',

    'wrong codes',
    'spaghetti codes',
    'alien codes',

    'assets',
    'package',

    'lint',
    'formatting',

    'config',
    'workflow',

    // NOTE: .releaserc.js
    'breaking',
    'no-release',
    'docs',
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
  messages: {
    type: '커밋메시지의 타입을 설정해주세요:',
    scope: '\n변경하려는 스코프는 무엇인가요? (optional):',
    // used if allowCustomScopes is true
    customScope: '변경하려는 스코프는 무엇인가요?:',
    subject: '변화에 대한 짧고 간결한 설명을 적어주세요:\n',
    body: '변화의 길고 자세한 설명을 적어주세요: (optional). "|"로 개행할 수 있어요:\n',
    footer: '이 변화로 인해 ISSUES CLOSED으로 추가할 내용이 있나요? (optional). E.g.: #31, #34:\n',
    confirmCommit: '이대로 커밋할까요?',
  },
};
