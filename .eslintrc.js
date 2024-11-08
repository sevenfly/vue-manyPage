module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    './.eslintrc-auto-import.json'
  ],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: {
      js: 'espree',
      ts: '@typescript-eslint/parser',
      '<template>': 'espree'
    }
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    //'no-dupe-keys': 2,
    // 'no-undef': 'off',
    // 'no-unused-vars': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    // '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['self'] // Allow `const self = this`; `[]` by default
      }
    ],
    'vue/script-setup-uses-vars': 'error',
    'no-async-promise-executor': 'off',
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off',
        'prettier/prettier': 'off',
        eqeqeq: 'off'
      }
    }
  ]
}
