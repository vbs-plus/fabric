import * as path from 'path';
import * as fs from 'fs';
import { compare } from 'compare-versions';
// import tsEslintConfig from './tsEslintConfig';

// const parserOptions = {
//   parser: '@babel/eslint-parser',
// };

const isVue3Project = ((packageJsonPath = 'package.json') => {
  const json = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const vueVersion = json.dependencies.vue;
  if (!vueVersion) return false;
  return compare(vueVersion.replace(/(\~|\^)/gi, ''), '3.0.0', '>=');
})();

const isJsMoreTs = async (path = 'src') => {
  const fg = require('fast-glob');
  const jsFiles = await fg(`${path}/src/**/*.{js,jsx}`, { deep: 3 });
  const tsFiles = await fg(`${path}/src/**/*.{ts,tsx}`, { deep: 3 });
  return jsFiles.length > tsFiles.length;
};

const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));

if (isTsProject) {
  try {
    isJsMoreTs(process.cwd()).then((jsMoreTs) => {
      if (!jsMoreTs) return;
      console.log('这是一个 TypeScript 项目，如果不是请删除 tsconfig.json');
    });
  } catch (e) {
    console.log(e);
  }
}

console.log('Lint Vue Project:', `Vue version is Vue${isVue3Project ? 3 : 2}`);
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  parser: 'vue-eslint-parser',
  plugins: ['jest', 'vue', '@typescript-eslint'],
  extends: isVue3Project
    ? [
        'prettier',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:vue/vue3-essential',
        // 'eslint:recommended',
        // '@vue/typescript/recommended',
        // '@vue/prettier',
        // '@vue/prettier/@typescript-eslint',
      ]
    : [
        'prettier',
        'plugin:vue/recommended',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:vue/essential',
        // '@vue/prettier',
        // 'eslint:recommended',
        // '@vue/typescript/recommended',
        // '@vue/prettier/@typescript-eslint',
      ],
  rules: {
    strict: ['error', 'never'],
    'generator-star-spacing': 0,
    'function-paren-newline': 0,
    'sort-imports': 0,
    'class-methods-use-this': 0,
    'no-confusing-arrow': 0,
    'linebreak-style': 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'unicorn/prevent-abbreviations': 'off',
    // Conflict with prettier
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'no-param-reassign': 2,
    'space-before-function-paren': 0,
    // Vue rules
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: {
          max: 5,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'vue/multi-word-component-names': 0,
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  // settings: {
  //   // support import modules from TypeScript files in JavaScript files
  //   'import/resolver': {
  //     node: {
  //       extensions: isTsProject ? ['.js', '.ts', '.d.ts'] : ['.js'],
  //     },
  //   },
  //   'import/parsers': {
  //     '@typescript-eslint/parser': isTsProject ? ['.ts', '.tsx', '.d.ts'] : ['.ts', '.d.ts'],
  //   },
  //   'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
  //   'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  //   polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  // },
  // overrides: isTsProject
  //   ? [
  //       {
  //         files: ['**/*.{ts,tsx}'],
  //         parser: '@typescript-eslint/parser',
  //         rules: tsEslintConfig,
  //         extends: ['prettier', 'plugin:@typescript-eslint/recommended'],
  //       },
  //       {
  //         files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
  //         env: {
  //           jest: true,
  //         },
  //       },
  //     ]
  //   : [
  //       {
  //         files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
  //         env: {
  //           jest: true,
  //         },
  //       },
  //     ],
  // parserOptions,
};
