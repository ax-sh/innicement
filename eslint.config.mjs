// https://github.com/antfu/eslint-config
import antfu from '@antfu/eslint-config';

const globalConfig = {
  rules: {
    'style/semi': ['off', 'never'],
    'toml/array-bracket-newline': 'off',
    'ts/no-misused-promises': ['off'],
    'ts/restrict-template-expressions': ['off'],
    'no-console': ['warn', { allow: ['table', 'debug', 'warn', 'error'] }],
    'react/no-children-map': 'off',
    'react/no-array-index-key': ['warn'],
    'ts/no-require-imports': 'off',
  },
};
export default antfu(
  {
    type: 'app',
    react: true,
    test: true,
    typescript: { tsconfigPath: 'tsconfig.json' },
    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      '**/fixtures',
      // ...globs
    ],
  },
  globalConfig,
  {},
);
