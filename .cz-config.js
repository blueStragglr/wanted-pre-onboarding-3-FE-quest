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
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};
