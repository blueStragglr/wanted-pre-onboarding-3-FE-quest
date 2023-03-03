module.exports = {
  extends: '@antfu',
  root: true,
  rules: {
    'no-console': process.env.MODE === 'production' ? 'error' : 'off',
    'sort-keys': 'off',

    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'TWO_WAY_BINDING',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
      },
    ],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/custom-event-name-casing': ['error', 'camelCase', { ignores: [] }],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/html-button-has-type': ['error', {
      button: true,
      reset: true,
      submit: true,
    }],
    'vue/html-comment-content-newline': ['error', {
      multiline: 'never',
      singleline: 'never',
    }],
    'vue/html-comment-indent': ['error', 2],
    'vue/max-attributes-per-line': [
      'error',
      {
        multiline: {
          max: 1,
        },
        singleline: {
          max: 1,
        },
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/static-class-names-order': 'error',
  },
}
