module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@spinnaker/eslint-plugin'],
  extends: ['eslint:recommended', 'prettier', 'prettier/@typescript-eslint', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@spinnaker/strictdi': 2,
    '@spinnaker/no-ng-module-export': 2,
    indent: 'off',
    'member-ordering': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-extra-boolean-cast': 'off',
    '@typescript-eslint/array-type': ['error', 'array-simple'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-case-declarations': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off', // TODO: turn on?
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off', // typescript already checks this
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
  },
  globals: {
    angular: true,
    $: true,
    _: true,
  },
};